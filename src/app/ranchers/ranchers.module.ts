import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RanchersComponent } from './ranchers.component';
import { ListRancherComponent } from './list-rancher/list-rancher.component';
import { AddRancherComponent } from './add-rancher/add-rancher.component';
import { SharedModule } from '../shared/shared.module';
import { RanchersService } from './services/ranchers.service';

@NgModule({
  imports: [
    CommonModule,
    SharedModule
  ],
  declarations: [RanchersComponent, ListRancherComponent, AddRancherComponent],
  providers: [RanchersService]
})
export class RanchersModule { }
