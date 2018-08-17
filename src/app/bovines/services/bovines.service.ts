import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { from, Observable, timer } from 'rxjs';
import { map, mergeMap, tap, toArray } from 'rxjs/operators';
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
import { Rspn } from '../../shared/models/response.model';
import { Vacuna } from '../../shared/models/vaccine.model';
import { straws } from '../../straw/services/straw.mock';
import { BaseService } from '../../util/base-service';
import { validate } from '../../util/http-util';
import { vaccines } from '../../vaccines/services/vaccines.mock';
import { bovine, bovines, meats, productions } from './bovines.mock';

@Injectable()
export class BovinesService extends BaseService<Bovino> {

  data: Bovino[] = [];

  constructor(private http: HttpClient, private session: SessionService) {
    super();
  }

  add(item: Bovino): Observable<string> {
    item.finca = this.session.farmId;
    return timer(500).pipe(
      map(() => new Rspn(true, '')), // simular respuesta
      map(x => validate(x)),
      tap(() => this.data.push(item))
    );
  }

  list(): Observable<Bovino[]> {
    return timer(500).pipe(
      tap(() => this.data = this.data.length > 0 ? this.data : bovines()),
      map(() => new Rspn(true, this.data)), // simular respuesta
      map(x => validate(x))
    );
  }

  update(item: Bovino): Observable<string> {
    return timer(500).pipe(
      map(() => new Rspn(true, '')), // simular respuesta
      map(x => validate(x))
    );
  }

  remove(id: string): Observable<string> {
    return timer(500).pipe(
      map(() => new Rspn(true, '')), // simular respuesta
      map(x => validate(x))
    );
  }

  getById(id: string): Observable<Bovino> {
    return timer(500).pipe(
      map(() => new Rspn(true, bovine())),
      map(x => validate(x))
    );
  }

  listMilk(id: string): Observable<Produccion[]> {
    return timer(500).pipe(
      map(() => new Rspn(true, productions())), // simular respuesta
      map(x => validate(x))
    );
  }

  addMilk(prod: Produccion): Observable<string> {
    return timer(500).pipe(
      map(() => new Rspn(true, '')), // simular respuesta
      map(x => validate(x))
    );
  }

  listReproductive(id: string) {

  }

  listMeat(id: string): Observable<Meat[]> {
    return timer(500).pipe(
      map(() => new Rspn(true, meats())), // simular respuesta
      map(x => validate(x))
    );
  }

  removeMeat(id: string): Observable<string> {
    return timer(500).pipe(
      map(() => new Rspn(true, '')), // simular respuesta
      map(x => validate(x))
    );
  }

  addMeat(meat: Meat): Observable<string> {
    return timer(500).pipe(
      map(() => new Rspn(true, '')), // simular respuesta
      map(x => validate(x))
    );
  }

  updateMeet(date: Date): Observable<string> {
    return timer(500).pipe(
      map(() => new Rspn(true, '')), // simular respuesta
      map(x => validate(x))
    );
  }

  listFeed(id: string): Observable<Alimentacion[]> {
    return timer(500).pipe(
      map(() => new Rspn(true, feeds())), // simular respuesta
      map(x => validate(x))
    );
  }

  listManage(id: string): Observable<Manejo[]> {
    return timer(500).pipe(
      map(() => new Rspn(true, manages())), // simular respuesta
      map(x => validate(x))
    );
  }

  listVaccines(id: string): Observable<Vacuna[]> {
    return timer(500).pipe(
      map(() => new Rspn(true, vaccines())), // simular respuesta
      map(x => validate(x))
    );
  }

  listHealth(id: string): Observable<Sanidad[]> {
    return timer(500).pipe(
      map(() => new Rspn(true, healths())), // simular respuesta
      map(x => validate(x))
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
