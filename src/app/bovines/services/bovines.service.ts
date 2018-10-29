import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, combineLatest, from, Observable } from 'rxjs';
import { map, mergeMap, startWith, tap, toArray } from 'rxjs/operators';
import { NavService } from '../../core/services/nav.service';
import { SessionService } from '../../core/services/session.service';
import { Bovino, Diagnostico, Novedad, Parto, Servicio } from '../../shared/models/bovine.model';
import { Alimentacion } from '../../shared/models/feed.model';
import { Sanidad } from '../../shared/models/health.model';
import { Manejo } from '../../shared/models/manage.model';
import { Meat } from '../../shared/models/meat.model';
import { Produccion } from '../../shared/models/milk-production.model';
import { Doc, Rspn } from '../../shared/models/response.model';
import { Straw } from '../../shared/models/straw.model';
import { Vacuna } from '../../shared/models/vaccine.model';
import { BaseService } from '../../util/base-service';
import { listToDoc, toDoc, validate } from '../../util/http-util';

@Injectable()
export class BovinesService extends BaseService<Bovino> {

  data: Bovino[] = [];
  loading: BehaviorSubject<boolean> = new BehaviorSubject(true);

  constructor(private http: HttpClient, private session: SessionService, private nav: NavService) {
    super();
  }

  add(item: Bovino): Observable<string> {
    item.finca = this.session.farmId;
    item.channels = [this.session.id];
    return this.http.post<Rspn<string>>(this.makeUrl('bovinos'), item, this.makeAuth(this.session.token)).pipe(
      map(x => validate(x))
    );
  }

  list(): Observable<Bovino[]> {
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
      tap(x => this.data = x),
      tap(() => this.loading.next(false), () => this.loading.next(false))
    );



  }

  update(item: Bovino): Observable<string> {
    const id = item.id;
    delete item.id;
    return this.http.put<Rspn<string>>(this.makeUrl('bovinos', id), item, this.makeAuth(this.session.token)).pipe(
      map(x => validate(x))
    );
  }

  remove(id: string): Observable<string> {
    return this.http.delete<Rspn<string>>(this.makeUrl('bovinos', id), this.makeAuth(this.session.token)).pipe(
      map(x => validate(x))
    );
  }

  getById(id: string): Observable<Bovino> {
    return this.http.get<Rspn<Doc<Bovino>>>(this.makeUrl('bovinos', id), this.makeAuth(this.session.token)).pipe(
      map(x => validate(x)),
      map(x => toDoc(x))
    );
  }

  listMilk(id: string): Observable<Produccion[]> {
    return this.http.get<Rspn<Doc<Produccion>[]>>(this.makeUrl('bovinos', id, 'leche'), this.makeAuth(this.session.token)).pipe(
      map(x => validate(x)),
      mergeMap(x => listToDoc(x))
    );
  }

  addMilk(prod: Produccion): Observable<string> {
    prod.channels = [this.session.id];
    return this.http.post<Rspn<string>>(this.makeUrl('bovinos', prod.bovino, 'leche'), prod, this.makeAuth(this.session.token)).pipe(
      map(x => validate(x))
    );
  }

  listReproductive(id: string) {

  }

  listMeat(id: string): Observable<Meat[]> {
    return this.http.get<Rspn<Doc<Meat>[]>>(this.makeUrl('bovinos', id, 'ceba'), this.makeAuth(this.session.token)).pipe(
      map(x => validate(x)),
      mergeMap(x => listToDoc(x))
    );
  }

  removeMeat(id: string, ceba: string): Observable<string> {
    return this.http.delete<Rspn<string>>(this.makeUrl('bovinos', id, 'ceba', ceba), this.makeAuth(this.session.token)).pipe(
      map(x => validate(x))
    );
  }

  addMeat(meat: Meat): Observable<string> {
    meat.channels = [this.session.id];
    meat.finca = this.session.farmId;
    return this.http.post<Rspn<string>>(this.makeUrl('bovinos', meat.bovino, 'ceba'), meat, this.makeAuth(this.session.token)).pipe(
      map(x => validate(x))
    );
  }

  updateMeet(id: string, date: Date): Observable<string> {
    return this.http.put<Rspn<string>>(this.makeUrl('bovinos', id, 'destete'), { date: date }, this.makeAuth(this.session.token)).pipe(
      map(x => validate(x))
    );
  }

  listFeed(id: string): Observable<Alimentacion[]> {
    return this.http.get<Rspn<Doc<Alimentacion>[]>>(this.makeUrl('bovinos', id, 'alimentacion'), this.makeAuth(this.session.token)).pipe(
      map(x => validate(x)),
      mergeMap(x => listToDoc(x))
    );
  }

  listManage(id: string): Observable<Manejo[]> {
    return this.http.get<Rspn<Doc<Manejo>[]>>(this.makeUrl('bovinos', id, 'manejo'), this.makeAuth(this.session.token)).pipe(
      map(x => validate(x)),
      mergeMap(x => listToDoc(x))
    );
  }

  listVaccines(id: string): Observable<Vacuna[]> {
    return this.http.get<Rspn<Doc<Vacuna>[]>>(this.makeUrl('bovinos', id, 'vacunas'), this.makeAuth(this.session.token)).pipe(
      map(x => validate(x)),
      mergeMap(x => listToDoc(x))
    );
  }

  listHealth(id: string): Observable<Sanidad[]> {
    return this.http.get<Rspn<Doc<Sanidad>[]>>(this.makeUrl('bovinos', id, 'sanidad'), this.makeAuth(this.session.token)).pipe(
      map(x => validate(x)),
      mergeMap(x => listToDoc(x))
    );
  }

  // Zeals

  addZeal(id: string, date: Date): Observable<string> {
    return this.http.put<Rspn<string>>(this.makeUrl('bovinos', id, 'celo'), { date: date }, this.makeAuth(this.session.token)).pipe(
      map(x => validate(x))
    );
  }

  listEmp(query: string, type: string) {
    return type === 'bull' ? this.bovineToEmp(query) : this.strawToEmp(query);
  }

  private bovineToEmp(query: string): Observable<ItemEmp[]> {
    const farm = this.session.farmId;
    return this.http.get<Rspn<Doc<Bovino>[]>>(this.makeUrl('bovinos', 'finca', farm + '?sexo=Macho&q=' + query),
      this.makeAuth(this.session.token)).pipe(
        tap(x => console.log(JSON.stringify(x))),
        map(x => validate(x)),
        mergeMap(x => from(x)),
        map(x => new ItemEmp(x.id, x.doc.nombre, x.doc.codigo)),
        toArray()
      );
  }

  private strawToEmp(query: string): Observable<ItemEmp[]> {
    const farm = this.session.farmId;
    return this.http.get<Rspn<Doc<Straw>[]>>(this.makeUrl('pajillas', farm + '?q=' + query),
      this.makeAuth(this.session.token)).pipe(
        map(x => validate(x)),
        mergeMap(x => from(x)),
        map(x => new ItemEmp(x.id, x.doc.breed, x.doc.idStraw, x.doc.layette)),
        toArray()
      );
  }

  addService(id: string, service: Servicio): Observable<String> {
    return this.http.put<Rspn<string>>(this.makeUrl('bovinos', id, 'servicio'), service, this.makeAuth(this.session.token)).pipe(
      map(x => validate(x))
    );
  }

  addDiagnostic(id: string, service: Servicio): Observable<Diagnostico> {
    return this.http.put<Rspn<string>>(this.makeUrl('bovinos', id, 'novedad'), service, this.makeAuth(this.session.token)).pipe(
      map(x => validate(x)),
      map(() => service.diagnostico)
    );
  }

  addNovelty(id: string, service: Servicio): Observable<Novedad> {
    return this.http.put<Rspn<string>>(this.makeUrl('bovinos', id, 'novedad'), service, this.makeAuth(this.session.token)).pipe(
      map(x => validate(x)),
      map(x => service.novedad)
    );
  }

  addBirth(id: string, service: Servicio): Observable<Parto> {
    return this.http.put<Rspn<string>>(this.makeUrl('bovinos', id, 'novedad'), service, this.makeAuth(this.session.token)).pipe(
      map(x => validate(x)),
      map(x => service.parto)
    );
  }

  img(bvn: Bovino, name: string): string {
    const digest = '_sync:att:' + bvn.files[name].digest;
    const dig = encodeURI(digest).replace(/\//g, '%2F');
    return this.makeUrl('bovinos', 'img', dig);
  }

}


export class ItemEmp {
  constructor(
    public id: string,
    public name: string,
    public cod: string,
    public arg?: string
  ) { }
}
