import { Component, OnInit } from '@angular/core';
import { ReportsService } from '../service/reports.service';
import { BovinesService } from '../../bovines/services/bovines.service';
import { Bovino } from '../../shared/models/bovine.model';
import { snackError } from '../../util/snackbar-util';
import { MatSnackBar } from '@angular/material';

@Component({
  selector: 'app-detail-reports',
  templateUrl: './detail-reports.component.html',
  styleUrls: ['./detail-reports.component.scss']
})
export class DetailReportsComponent implements OnInit {

  loading: boolean;
  catSelect: number;
  reportSelect: number;
  typeReportSelect: string;
  monthSelect: string;
  dateInitSelect: Date;
  dateFinalSelect: Date;
  selectedTab = 0;
  promSelect: string;
  typePromSelect: any;
  bovineSelect: Bovino;
  lstBovine: Bovino[];
  viewAverage: boolean;
  average: number;


  constructor(public service: ReportsService, private serviceBovine: BovinesService, private snack: MatSnackBar) {
    this.typeReportSelect = 'Mensual';
    this.promSelect = 'Total';
    this.catSelect = 0;
    this.reportSelect = 0;
    this.typePromSelect = service.typeProms[0];
    this.viewAverage = false;
    this.getBovines();
  }

  getBovines() {
    this.loading = true;
    this.serviceBovine.list().subscribe(
      x => {
        this.lstBovine = x;
        this.loading = false;
      }, err => {
        snackError(this.snack, err);
      }
    );
  }

  changeAvrg() {
    this.typeReportSelect = 'Mensual';
    this.promSelect = 'Total';
    this.bovineSelect = null;
    this.monthSelect = null;
    this.dateInitSelect = null;
    this.dateFinalSelect = null;
  }

  getYear() {
    return new Date().getFullYear();
  }

  ngOnInit() {
  }

  changeTab() {
    this.typePromSelect = this.service.typeProms[0];
    this.catSelect = 0;
    this.reportSelect = 0;
    this.typeReportSelect = 'Mensual';
    this.monthSelect = null;
    this.dateInitSelect = null;
    this.dateFinalSelect = null;
    this.promSelect = 'Total';
    this.viewAverage = false;
  }

  changeCategory() {
    this.reportSelect = 0;
  }

  closeAverage() {
    this.viewAverage = !this.viewAverage;
  }

  getAverage() {
    // obtener resultado promedio
    this.viewAverage = true;
    this.average = 0.0;
  }

  downloadReport() {
    // descargar reporte
  }

}
