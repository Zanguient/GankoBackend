import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HealthComponent } from './health.component';
import { ListHealthComponent } from './list-health/list-health.component';
import { AddHealthComponent } from './add-health/add-health.component';
import { DetailHealthComponent } from './detail-health/detail-health.component';
import { ReApplyHealthComponent } from './re-apply-health/re-apply-health.component';
import { SharedModule } from '../shared/shared.module';
import { HealthService } from './services/health.service';


@NgModule({
  imports: [
    CommonModule,
    SharedModule
  ],
  declarations: [HealthComponent, ListHealthComponent, AddHealthComponent, DetailHealthComponent, ReApplyHealthComponent],
  providers: [HealthService]
})
export class HealthModule { }
