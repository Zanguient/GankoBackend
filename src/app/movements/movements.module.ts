import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MovementsComponent } from './movements.component';
import { SharedModule } from '../shared/shared.module';
import { MovementsService } from './services/movements.service';

@NgModule({
  imports: [
    CommonModule,
    SharedModule
  ],
  declarations: [MovementsComponent],
  providers: [MovementsService]
})
export class MovementsModule { }
