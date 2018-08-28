import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SelectBovineComponent } from './pages/select-bovine/select-bovine.component';
import { SelectGroupComponent } from './pages/select-group/select-group.component';
import { LoginComponent } from './pages/login/login.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { SharedModule } from '../shared/shared.module';
import { ClearDialogComponent } from './pages/select-bovine/clear-dialog/clear-dialog.component';

@NgModule({
  imports: [
    CommonModule,
    SharedModule
  ],
  entryComponents: [
    ClearDialogComponent
  ],
  declarations: [SelectBovineComponent, SelectGroupComponent, LoginComponent, DashboardComponent, NotFoundComponent, ClearDialogComponent]
})
export class CoreModule { }
