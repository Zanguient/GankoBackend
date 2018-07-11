import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ManageComponent } from './manage.component';
import { AddManageComponent } from './add-manage/add-manage.component';
import { ListManageComponent } from './list-manage/list-manage.component';
import { NextManageComponent } from './list-manage/tabs/next-manage/next-manage.component';
import { PendingManageComponent } from './list-manage/tabs/pending-manage/pending-manage.component';
import { RecentManageComponent } from './list-manage/tabs/recent-manage/recent-manage.component';
import { DetailManageComponent } from './detail-manage/detail-manage.component';
import { ReApplyManageComponent } from './re-apply-manage/re-apply-manage.component';
import { SharedModule } from '../shared/shared.module';
import { ManageService } from './services/manage.service';

@NgModule({
  imports: [
    CommonModule,
    SharedModule
  ],
  declarations: [ManageComponent, AddManageComponent, ListManageComponent, NextManageComponent,
    PendingManageComponent, RecentManageComponent, DetailManageComponent, ReApplyManageComponent],
  providers: [ManageService]
})
export class ManageModule { }
