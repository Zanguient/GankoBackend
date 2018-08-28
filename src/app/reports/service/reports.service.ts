import { Injectable } from '@angular/core';

@Injectable()
export class ReportsService {

  typeCats = [{
    key: 0, value: 'Reproductivos',
    typeReports: [
      { key: 0, value: 'Partos futuros' }, { key: 1, value: 'Secado' }, { key: 2, value: 'Preparación' },
      { key: 3, value: 'Días abiertos' }, { key: 4, value: 'Partos atendidos' }, { key: 5, value: 'Abortos' },
      { key: 6, value: 'Tres servicios' }, { key: 7, value: 'Celos' }]
  }, {
    key: 1, value: 'Producción de leche',
    typeReports: [
      { key: 0, value: 'Consolidado de leche' }, { key: 1, value: 'Reporte de leche' }]
  }, {
    key: 2, value: 'Ceba',
    typeReports: [
      { key: 0, value: 'Destetos' }, { key: 1, value: 'Ganancia diaria de peso' }]
  }, {
    key: 3, value: 'Praderas',
    typeReports: [
      { key: 0, value: 'Praderas' }, { key: 1, value: 'Ocupación de praderas' }]
  }, {
    key: 4, value: 'Alimentación',
    typeReports: [
      { key: 0, value: 'Alimentación' }, { key: 1, value: 'Suplementos usados' }]
  }, {
    key: 5, value: 'Movimientos',
    typeReports: []
  }, {
    key: 6, value: 'Entradas',
    typeReports: [
      { key: 0, value: 'Inventario' }, { key: 1, value: 'Terneras en estaca' }, { key: 2, value: 'Terneras destetas' },
      { key: 3, value: 'Novillas de levante' }, { key: 4, value: 'Novillas vientre' }, { key: 5, value: 'Abortos' },
      { key: 6, value: 'Celos' }, { key: 7, value: 'Vacas' }]
  }, {
    key: 7, value: 'Salidas',
    typeReports: [
      { key: 0, value: 'Salida' }]
  }, {
    key: 8, value: 'Vacunas',
    typeReports: [
      { key: 0, value: 'Vacunas' }]
  }, {
    key: 9, value: 'Sanidad',
    typeReports: [
      { key: 0, value: 'Sanidad' }]
  }, {
    key: 10, value: 'Manejos',
    typeReports: [
      { key: 0, value: 'Manejo' }]
  }, {
    key: 11, value: 'Pajillas',
    typeReports: [
      { key: 0, value: 'Pajillas' }]
  }];

  typeProms = [{ key: 0, value: 'Producción de leche', stateViewAvrg: true, stateTypeAvrg: true, stateAvrgMonth: true },
  { key: 1, value: 'Ganancia diaria de peso', stateViewAvrg: true, stateTypeAvrg: true, stateAvrgMonth: true },
  { key: 2, value: 'Días abiertos', stateViewAvrg: true, stateTypeAvrg: false, stateAvrgMonth: false },
  { key: 3, value: 'Intervalo entre partos' , stateViewAvrg: true, stateTypeAvrg: false, stateAvrgMonth: false},
  { key: 4, value: 'Partos por mes' , stateViewAvrg: false, stateTypeAvrg: false, stateAvrgMonth: true},
  { key: 5, value: 'Total abortos' , stateViewAvrg: false, stateTypeAvrg: false, stateAvrgMonth: false},
  { key: 6, value: 'Total partos' , stateViewAvrg: false, stateTypeAvrg: false, stateAvrgMonth: false},
  { key: 7, value: 'Total servicios' , stateViewAvrg: false, stateTypeAvrg: false, stateAvrgMonth: false},
  { key: 8, value: 'Total servicios efectivos' , stateViewAvrg: false, stateTypeAvrg: false, stateAvrgMonth: false}];

  reports: string[] = ['Mensual', 'Rango de fechas'];

  months: string[] = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre',
    'Diciembre'];

  average: string[] = ['Total', 'Individual'];

  constructor() { }
}
