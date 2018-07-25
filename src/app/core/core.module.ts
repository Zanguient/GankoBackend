import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SelectBovineComponent } from './pages/select-bovine/select-bovine.component';
import { SelectGroupComponent } from './pages/select-group/select-group.component';
import { LoginComponent } from './pages/login/login.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    SharedModule
  ],
  declarations: [SelectBovineComponent, SelectGroupComponent, LoginComponent, DashboardComponent, NotFoundComponent]
})
export class CoreModule { }
