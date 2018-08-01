import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { SessionService } from '../../core/services/session.service';
import { Bovino } from '../../shared/models/bovine.model';
import { BaseService } from '../../util/base-service';
import { Observable, timer } from 'rxjs';
import { map, tap, mergeMap } from 'rxjs/operators';
import { Rspn } from '../../shared/models/response.model';
import { validate, listToDoc } from '../../util/http-util';
import { bovines, bovine, productions, meats } from './bovines.mock';
import { milks } from '../../milk/services/milk.mock';
import { Leche } from '../../shared/models/milk.model';
import { Alimentacion } from '../../shared/models/feed.model';
import { feeds } from '../../feed/services/feed.mock';
import { Manejo } from '../../shared/models/manage.model';
import { manages } from '../../manage/services/manage.mock';
import { Vacuna } from '../../shared/models/vaccine.model';
import { vaccines } from '../../vaccines/services/vaccines.mock';
import { Sanidad } from '../../shared/models/health.model';
import { healths } from '../../health/services/health.mock';
import { Produccion } from '../../shared/models/milk-production.model';
import { Meat } from '../../shared/models/meat.model';

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

}
