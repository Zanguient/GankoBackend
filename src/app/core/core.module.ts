import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SelectBovineComponent } from './pages/select-bovine/select-bovine.component';
import { SelectGroupComponent } from './pages/select-group/select-group.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [SelectBovineComponent, SelectGroupComponent]
})
export class CoreModule { }
