import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReportsComponent } from './reports.component';
import { ReportsService } from './service/reports.service';
import { DetailReportsComponent } from './detail-reports/detail-reports.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    SharedModule
  ],
  declarations: [ReportsComponent, DetailReportsComponent],
  providers: [ReportsService]
})
export class ReportsModule { }
