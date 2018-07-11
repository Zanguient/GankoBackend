import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListFarmComponent } from './list-farm/list-farm.component';
import { AddFarmComponent } from './add-farm/add-farm.component';
import { FarmsComponent } from './farms.component';
import { SharedModule } from '../shared/shared.module';
import { FarmsService } from './services/farms.service';

@NgModule({
  imports: [
    CommonModule,
    SharedModule
  ],
  declarations: [ListFarmComponent, AddFarmComponent, FarmsComponent],
  providers: [FarmsService]
})
export class FarmsModule { }
