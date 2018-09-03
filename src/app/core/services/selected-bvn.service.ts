import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { combineLatest, from, Observable, Subject, timer } from 'rxjs';
import { map, mergeMap, startWith, tap, toArray } from 'rxjs/operators';
import { environment } from '../../../environments/environment';
import { bovines } from '../../bovines/services/bovines.mock';
import { Bovino } from '../../shared/models/bovine.model';
import { Group } from '../../shared/models/group.model';
import { Doc, Rspn } from '../../shared/models/response.model';
import { listToDoc, validate, toDoc } from '../../util/http-util';
import { NavService } from './nav.service';
import { SessionService } from './session.service';

@Injectable({
  providedIn: 'root'
})
export class SelectedBvnService {

  loading: Subject<boolean> = new Subject();

  selecteds: string[];
  removeds: string[] = [];
  group: Group;

  editable = false;

  constructor(private nav: NavService, private session: SessionService, private http: HttpClient) { }

  listSelecteds() {
    const sls = this.group ? this.group.bovines : this.selecteds;

    return this.http.post<Rspn<Doc<Bovino>[]>>(this.makeUrl('bovinos', 'ids'), { ids: sls },
      this.makeAuth(this.session.token)).pipe(
        map(x => validate(x)),
        mergeMap(x => from(x)),
        map(x => toDoc(x)),
        map(x => new BovineRemoved(x, false)),
        toArray()
      );
  }


  list(): Observable<BovineSelected[]> {
    this.clear();
    const filter = this.nav.filter.pipe(
      startWith('')
    );
    const query = this.nav.search.pipe(
      startWith(''),
      map(x => x === '' ? x : 'q=' + x)
    );
    this.loading.next(true);

    return combineLatest(filter, query).pipe(
      tap(() => this.loading.next(true)),
      map(x => x.filter(q => q !== '').join('&')),
      map(x => this.makeUrl('bovinos', 'finca', this.session.farmId) + (x.length > 0 ? '?' + x : x)),
      mergeMap(x => this.http.get<Rspn<Doc<Bovino>[]>>(x, this.makeAuth(this.session.token))),
      map(x => validate(x)),
      mergeMap(x => listToDoc(x)),
      mergeMap(x => from(x).pipe(
        map(bvn => new BovineSelected(bvn, false)),
        toArray()
      )),
      tap(() => this.loading.next(false), () => this.loading.next(false))
    );

  }

  listGroup(): Observable<Group[]> {
    this.clear();
    this.loading.next(true);
    return this.http.get<Rspn<Doc<Group>[]>>(this.makeUrl('grupos'), this.makeAuth(this.session.token)).pipe(
      map(x => validate(x)),
      mergeMap(x => listToDoc(x)),
      tap(() => this.loading.next(false), () => this.loading.next(false))
    );
  }

  clear() {
    this.group = null;
    this.selecteds = null;
  }

  makeUrl(...paths: any[]) {
    let url = environment.urlBase;
    paths.forEach(x => url += `/${x}`);
    return url;
  }

  makeAuth(token: string) {
    return {
      headers: {
        'Authorization': token
      }
    };
  }

}

export class BovineSelected {
  constructor(
    public bvn: Bovino,
    public selected: boolean) { }
}

export class BovineRemoved {
  constructor(
    public bvn: Bovino,
    public removed: boolean
  ) { }
}
