import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MilkComponent } from './milk.component';
import { ListMilkComponent } from './list-milk/list-milk.component';
import { AddMilkComponent } from './add-milk/add-milk.component';
import { SharedModule } from '../shared/shared.module';
import { MilkService } from './services/milk.service';

@NgModule({
  imports: [
    CommonModule,
    SharedModule
  ],
  declarations: [MilkComponent, ListMilkComponent, AddMilkComponent],
  providers: [MilkService]
})
export class MilkModule { }
