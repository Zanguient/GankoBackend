import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-detail-reports',
  templateUrl: './detail-reports.component.html',
  styleUrls: ['./detail-reports.component.scss']
})
export class DetailReportsComponent implements OnInit {

  loading: boolean;
  typeCats = [{ key: '1', value: 'Reproductivos' }, { key: '2', value: 'Producción de leche' }, { key: '3', value: 'Ceba' },
  { key: '4', value: 'Prderas' }, { key: '5', value: 'Alimentación' }, { key: '6', value: 'Movimientos' }, { key: '7', value: 'Entradas' },
  { key: '8', value: 'Salidas' }, { key: '9', value: 'Vacunas' }, { key: '10', value: 'Sanidad' }, { key: '11', value: 'Manejos' },
  { key: '12', value: 'Pajillas' }];

  typeReports = [{ key: '1', value: 'Inventario' }, { key: '2', value: 'Terneras en estaca' }, { key: '3', value: 'Terneras destetas' },
  { key: '4', value: 'Novillas de levante' }, { key: '5', value: 'Novillas vientre' }, { key: '6', value: 'Abortos' },
  { key: '7', value: 'Celos' }, { key: '8', value: 'Vacas' }];

  reports: string[] = ['Mensual', 'Rango de fechas'];

  months: string[] = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre',
    'Diciembre'];

  catSelect: string;
  reportSelect: string;
  typeReportSelect = 'Mensual';
  monthSelect: string;
  dateInitSelect: Date;
  dateFinalSelect: Date;
  selectedTab = 0;

  constructor() { }

  ngOnInit() {
  }

}
