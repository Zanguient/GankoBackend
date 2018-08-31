import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MovementsComponent } from './movements.component';
import { SharedModule } from '../shared/shared.module';
import { MovementsService } from './services/movements.service';
import { ListMovementsComponent } from './list-movements/list-movements.component';
import { AddGroupDialogComponent } from './add-group-dialog/add-group-dialog.component';
import { RemoveGroupDialogComponent } from './remove-group-dialog/remove-group-dialog.component';

@NgModule({
  imports: [
    CommonModule,
    SharedModule
  ],
  entryComponents: [
    AddGroupDialogComponent, RemoveGroupDialogComponent
  ],
  declarations: [MovementsComponent, AddGroupDialogComponent, RemoveGroupDialogComponent, ListMovementsComponent],
  providers: [MovementsService]
})
export class MovementsModule { }
