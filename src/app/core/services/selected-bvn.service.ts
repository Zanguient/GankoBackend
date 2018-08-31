import { Injectable } from '@angular/core';
import { Bovino } from '../../shared/models/bovine.model';
import { NavService } from './nav.service';
import { startWith, mergeMap, map, tap, toArray } from 'rxjs/operators';
import { combineLatest, timer, Observable, Subject, from, BehaviorSubject } from 'rxjs';
import { Rspn } from '../../shared/models/response.model';
import { validate } from '../../util/http-util';
import { bovines, bovine } from '../../bovines/services/bovines.mock';
import { Group } from '../../shared/models/group.model';
import { groups } from '../../groups/service/group.mock';

@Injectable({
  providedIn: 'root'
})
export class SelectedBvnService {

  url = '';
  loading: BehaviorSubject<boolean> = new BehaviorSubject(true);

  selecteds: string[];
  group: Group;


  constructor(private nav: NavService) { }

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
      map(x => this.url + (x.length > 0 ? '?' + x : x)),
      tap(x => console.log(x)),
      mergeMap(x => timer(500)), // Simular Solicitud
      map(() => new Rspn(true, bovines())), // simular respuesta
      map(x => validate(x)),
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
    return timer(500).pipe(
      map(() => new Rspn(true, groups())), // simular respuesta
      map(x => validate(x)),
      tap(() => this.loading.next(false), () => this.loading.next(false))
    );
  }

  clear() {
    this.group = null;
    this.selecteds = null;
  }

}

export class BovineSelected {
  constructor(
    public bvn: Bovino,
    public selected: boolean) { }
}
