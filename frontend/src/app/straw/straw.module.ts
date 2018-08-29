import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StrawComponent } from './straw.component';
import { StrawService } from './services/straw.service';
import { AddStrawComponent } from './add-straw/add-straw.component';
import { ListStrawComponent } from './list-straw/list-straw.component';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  imports: [
    CommonModule,
    SharedModule
  ],
  declarations: [StrawComponent, AddStrawComponent, ListStrawComponent],
  providers: [StrawService]
})
export class StrawModule { }
