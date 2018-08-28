import { Component, OnInit } from '@angular/core';
import { ReportsService } from '../service/reports.service';

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
  typePromSelect: number;


  constructor(public service: ReportsService) {
    this.typeReportSelect = 'Mensual';
    this.promSelect = 'Total';
    this.catSelect = 0;
    this.reportSelect = 0;
    this.typePromSelect = 0;
  }

  ngOnInit() {
  }

  changeTab() {
    this.typePromSelect = 0;
    this.catSelect = 0;
    this.reportSelect = 0;
    this.typeReportSelect = 'Mensual';
    this.monthSelect = null;
    this.dateInitSelect = null;
    this.dateFinalSelect = null;
    this.promSelect = 'Total';
  }

  changeCategory() {
    this.reportSelect = 0;
  }

}
