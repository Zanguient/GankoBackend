import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VaccinesComponent } from './vaccines.component';
import { ListVaccinesComponent } from './list-vaccines/list-vaccines.component';
import { AddVaccinesComponent } from './add-vaccines/add-vaccines.component';
import { DetailVaccinesComponent } from './detail-vaccines/detail-vaccines.component';
import { ReApplyVaccinesComponent } from './re-apply-vaccines/re-apply-vaccines.component';
import { SharedModule } from '../shared/shared.module';
import { VaccinesService } from './services/vaccines.service';

@NgModule({
  imports: [
    CommonModule,
    SharedModule
  ],
  declarations: [VaccinesComponent, ListVaccinesComponent, AddVaccinesComponent, DetailVaccinesComponent, ReApplyVaccinesComponent],
  providers: [VaccinesService]
})
export class VaccinesModule { }
