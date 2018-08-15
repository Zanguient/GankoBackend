import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MeadowComponent } from './meadow.component';
import { MeadowService } from './services/meadow.service';
import { ListMeadowComponent } from '../meadow/list-meadow/list-meadow.component';
import { SharedModule } from '../shared/shared.module';
import { AddMeadowDialogComponent } from '../meadow/add-meadow-dialog/add-meadow-dialog.component';
import { OptMeadowDialogComponent } from '../meadow/opt-meadow-dialog/opt-meadow-dialog.component';
import { DetailMeadowComponent } from '../meadow/detail-meadow/detail-meadow.component';
import { InfoMeadowComponent } from '../meadow/info-meadow/info-meadow.component';
import { AlertsMeadowComponent } from '../meadow/alerts-meadow/alerts-meadow.component';
import { AddMaintenanceComponent } from '../meadow/info-meadow/add-maintenance/add-maintenance.component';
import { AddGaugingComponent } from '../meadow/info-meadow/add-gauging/add-gauging.component';
import { AddAlertComponent } from '../meadow/alerts-meadow/add-alert/add-alert.component';
import { ResultDialogComponent } from '../meadow/info-meadow/add-gauging/result-dialog/result-dialog.component';

@NgModule({
  imports: [
    CommonModule,
    SharedModule
  ],
  entryComponents: [AddMeadowDialogComponent, OptMeadowDialogComponent, ResultDialogComponent],
  declarations: [MeadowComponent, AddMeadowDialogComponent, OptMeadowDialogComponent, ListMeadowComponent,
    DetailMeadowComponent, InfoMeadowComponent, AlertsMeadowComponent, AddMaintenanceComponent, AddGaugingComponent, AddAlertComponent,
    ResultDialogComponent],
  providers: [MeadowService]
})
export class MeadowModule { }
