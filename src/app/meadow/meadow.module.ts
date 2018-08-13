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

@NgModule({
  imports: [
    CommonModule,
    SharedModule
  ],
  entryComponents: [AddMeadowDialogComponent, OptMeadowDialogComponent],
  declarations: [MeadowComponent, AddMeadowDialogComponent, OptMeadowDialogComponent, ListMeadowComponent,
    DetailMeadowComponent, InfoMeadowComponent, AlertsMeadowComponent],
  providers: [MeadowService]
})
export class MeadowModule { }
