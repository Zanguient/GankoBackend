import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { from, Observable, timer, BehaviorSubject, combineLatest } from 'rxjs';
import { map, mergeMap, tap, toArray, startWith } from 'rxjs/operators';
import { SessionService } from '../../core/services/session.service';
import { feeds } from '../../feed/services/feed.mock';
import { healths } from '../../health/services/health.mock';
import { manages } from '../../manage/services/manage.mock';
import { Bovino, Servicio, Diagnostico, Novedad, Parto } from '../../shared/models/bovine.model';
import { Alimentacion } from '../../shared/models/feed.model';
import { Sanidad } from '../../shared/models/health.model';
import { Manejo } from '../../shared/models/manage.model';
import { Meat } from '../../shared/models/meat.model';
import { Produccion } from '../../shared/models/milk-production.model';
import { Rspn, Doc } from '../../shared/models/response.model';
import { Vacuna } from '../../shared/models/vaccine.model';
import { straws } from '../../straw/services/straw.mock';
import { BaseService } from '../../util/base-service';
import { validate, listToDoc, toDoc } from '../../util/http-util';
import { vaccines } from '../../vaccines/services/vaccines.mock';
import { bovine, bovines, meats, productions } from './bovines.mock';
import { NavService } from '../../core/services/nav.service';

@Injectable()
export class BovinesService extends BaseService<Bovino> {

  data: Bovino[] = [];
  loading: BehaviorSubject<boolean> = new BehaviorSubject(true);

  constructor(private http: HttpClient, private session: SessionService, private nav: NavService) {
    super();
  }

  add(item: Bovino): Observable<string> {
    item.finca = this.session.farmId;
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
      map(x => this.makeUrl('bovinos', this.session.farmId) + (x.length > 0 ? '?' + x : x)),
      mergeMap(x => this.http.get<Rspn<Doc<Bovino>[]>>(x, this.makeAuth(this.session.token))),
      map(x => validate(x)),
      mergeMap(x => listToDoc(x)),
      tap(x => this.data = x),
      tap(() => this.loading.next(false), () => this.loading.next(false))
    );



  }

  update(item: Bovino): Observable<string> {
    return timer(500).pipe(
      map(() => new Rspn(true, '')), // simular respuesta
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
    return this.http.post<Rspn<string>>(this.makeUrl('bovinos', meat.bovino, 'ceba'), meat, this.makeAuth(this.session.token)).pipe(
      map(x => validate(x))
    );
  }

  updateMeet(id: string, date: Date): Observable<string> {
    return this.http.put<Rspn<string>>(this.makeUrl('bovinos', id, 'detete'), { date: date }, this.makeAuth(this.session.token)).pipe(
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
    return timer(500).pipe(
      map(() => new Rspn(true, vaccines())), // simular respuesta
      map(x => validate(x))
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
    return timer(500).pipe(
      map(() => new Rspn(true, '')), // simular respuesta
      map(x => validate(x))
    );
  }

  listEmp(query: string, type: string) {
    return type === 'bull' ? this.bovineToEmp(query) : this.strawToEmp(query);
  }

  private bovineToEmp(query: string): Observable<ItemEmp[]> {
    const farm = this.session.farmId;
    return timer(500).pipe(
      map(() => new Rspn(true, bovines())), // simular respuesta
      map(x => validate(x)),
      mergeMap(x => from(x)),
      map(x => new ItemEmp(x.id, x.nombre, x.codigo)),
      toArray()
    );
  }

  private strawToEmp(query: string): Observable<ItemEmp[]> {
    const farm = this.session.farmId;
    return timer(500).pipe(
      map(() => new Rspn(true, straws())), // simular respuesta
      map(x => validate(x)),
      mergeMap(x => from(x)),
      map(x => new ItemEmp(x.id, x.breed, x.idStraw, x.layette)),
      toArray()
    );
  }

  addService(id: string, service: Servicio): Observable<String> {
    return timer(500).pipe(
      map(() => new Rspn(true, '')), // simular respuesta
      map(x => validate(x))
    );
  }

  addDiagnostic(id: string, diagnostic: Diagnostico): Observable<Diagnostico> {
    return timer(500).pipe(
      map(() => new Rspn(true, '')), // simular respuesta
      map(x => validate(x)),
      map(() => diagnostic)
    );
  }

  addNovelty(id: string, novelty: Novedad): Observable<Novedad> {
    return timer(500).pipe(
      map(() => new Rspn(true, '')), // simular respuesta
      map(x => validate(x)),
      map(x => novelty)
    );
  }

  addBirth(id: string, birth: Parto): Observable<Parto> {
    return timer(500).pipe(
      map(() => new Rspn(true, '')), // simular respuesta
      map(x => validate(x)),
      map(x => birth)
    );
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
