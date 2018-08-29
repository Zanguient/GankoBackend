import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReportsComponent } from './reports.component';
import { ReportsService } from './service/reports.service';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [ReportsComponent],
  providers: [ReportsService]
})
export class ReportsModule { }
