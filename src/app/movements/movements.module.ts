import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MovementsComponent } from './movements.component';
import { SharedModule } from '../shared/shared.module';
import { MovementsService } from './services/movements.service';
import { ListMovementsComponent } from './list-movements/list-movements.component';
import { AddGroupDialogComponent } from './add-group/add-group-dialog.component';

@NgModule({
  imports: [
    CommonModule,
    SharedModule
  ],
  declarations: [MovementsComponent, AddGroupDialogComponent, ListMovementsComponent],
  providers: [MovementsService]
})
export class MovementsModule { }
