import { Injectable } from '@angular/core';
import { HttpClient } from '../../../../node_modules/@angular/common/http';
import { SessionService } from 'src/app/core/services/session.service';
import { Observable } from 'rxjs';
import { Rspn, Doc } from '../../shared/models/response.model';
import { environment } from '../../../environments/environment';
import { map, mergeMap, tap } from 'rxjs/operators';
import { validate, listToDoc } from 'src/app/util/http-util';

@Injectable()
export class ReportsService {

  data: String[] = [];

  typeCats = [{
    key: 0, value: 'Reproductivos',
    typeReports: [
      { key: 0, value: 'Partos futuros' }, { key: 1, value: 'Secado' }, { key: 2, value: 'Preparación' },
      { key: 3, value: 'Días abiertos' }, { key: 4, value: 'Partos atendidos' }, { key: 5, value: 'Abortos' },
      { key: 6, value: 'Tres servicios' }, { key: 7, value: 'Celos' }]
  }, {
    key: 1, value: 'Producción de leche',
    typeReports: [
      { key: 8, value: 'Consolidado de leche' }, { key: 9, value: 'Reporte de leche' }]
  }, {
    key: 2, value: 'Ceba',
    typeReports: [
      { key: 10, value: 'Destetos' }/*, { key: , value: 'Ganancia diaria de peso' }*/]
  }, {
    key: 3, value: 'Praderas',
    typeReports: [
      { key: 11, value: 'Praderas' }, { key: 12, value: 'Ocupación de praderas' }]
  }, {
    key: 4, value: 'Alimentación',
    typeReports: [
      { key: 14, value: 'Alimentación' }/*, { key: 1, value: 'Suplementos usados' }*/]
  }, {
    key: 5, value: 'Movimientos',
    typeReports: [
      { key: 13, value: 'Movimientos' }
    ]
  }, {
    key: 6, value: 'Entradas',
    typeReports: [
      { key: 15, value: 'Inventario' }, { key: 16, value: 'Terneras en estaca' }, { key: 17, value: 'Terneras destetas' },
      { key: 18, value: 'Novillas de levante' }, { key: 19, value: 'Novillas vientre' }, /*{ key: , value: 'Abortos' },*/
      /*{ key: , value: 'Celos' },*/ { key: 20, value: 'Vacas' }]
  }, {
    key: 7, value: 'Salidas',
    typeReports: [
      { key: 21, value: 'Salida' }]
  }, {
    key: 8, value: 'Vacunas',
    typeReports: [
      { key: 22, value: 'Vacunas' }]
  }, {
    key: 9, value: 'Sanidad',
    typeReports: [
      { key: 23, value: 'Sanidad' }]
  }, {
    key: 10, value: 'Manejos',
    typeReports: [
      { key: 24, value: 'Manejo' }]
  }, {
    key: 11, value: 'Pajillas',
    typeReports: [
      { key: 25, value: 'Pajillas' }]
  }];

  typeProms = [{ key: 0, value: 'Producción de leche', stateViewAvrg: true, stateTypeAvrg: true, stateAvrgMonth: true, month: false },
  { key: 1, value: 'Ganancia diaria de peso', stateViewAvrg: true, stateTypeAvrg: true, stateAvrgMonth: true, month: false },
  { key: 2, value: 'Días abiertos', stateViewAvrg: true, stateTypeAvrg: false, stateAvrgMonth: false, month: false },
  { key: 3, value: 'Intervalo entre partos', stateViewAvrg: true, stateTypeAvrg: false, stateAvrgMonth: false, month: false },
  { key: 4, value: 'Partos por mes', stateViewAvrg: false, stateTypeAvrg: false, stateAvrgMonth: true, month: true },
  { key: 5, value: 'Total abortos', stateViewAvrg: false, stateTypeAvrg: false, stateAvrgMonth: false, month: false },
  { key: 6, value: 'Total partos', stateViewAvrg: false, stateTypeAvrg: false, stateAvrgMonth: false, month: false },
  { key: 7, value: 'Total servicios', stateViewAvrg: false, stateTypeAvrg: false, stateAvrgMonth: false, month: false },
  { key: 8, value: 'Total servicios efectivos', stateViewAvrg: false, stateTypeAvrg: false, stateAvrgMonth: false, month: false }];

  reports: string[] = ['Mensual', 'Rango de fechas'];

  months = [{ key: 1, value: 'Enero' }, { key: 2, value: 'Febrero' }, { key: 3, value: 'Marzo' }, { key: 4, value: 'Abril' }, { key: 5, value: 'Mayo' },
  { key: 6, value: 'Junio' }, { key: 7, value: 'Julio' }, { key: 8, value: 'Agosto' }, { key: 9, value: 'Septiembre' }, { key: 10, value: 'Octubre' },
  { key: 11, value: 'Noviembre' }, { key: 12, value: 'Diciembre' }];

  average: string[] = ['Total', 'Individual'];

  constructor(private http: HttpClient, private session: SessionService) { }

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

  list(idForm: number, month: number, year: number, initDate: number, finDate: number): Observable<String[]> {
    var dataQuery: String = null;
    dataQuery = '?q=';
    dataQuery += this.session.farmId;
    if (month === null) {
      dataQuery += '&initialDate=';
      dataQuery += initDate.toString();
      dataQuery += '&finalDate=';
      dataQuery += finDate.toString();
    } else {
      dataQuery += '&month=';
      dataQuery += month.toString();
      dataQuery += '&year=';
      dataQuery += year.toString();
    }
    return this.http.get<Rspn<Doc<String>[]>>(this.makeUrl('reportes', idForm) + dataQuery, this.makeAuth(this.session.token)).pipe(
      map(x => validate(x)),
      mergeMap(x => listToDoc(x)),
      tap(x => this.data = x)
    );
  }
}
