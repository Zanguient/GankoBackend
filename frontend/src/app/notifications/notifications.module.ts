import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NotificationsComponent } from './notifications.component';
import { SharedModule } from '../shared/shared.module';
import { NotificationsService } from './service/notifications.service';
import { NextNotificationsComponent } from './tabs/next-notifications/next-notifications.component';
import { PreviousNotificationsComponent } from './tabs/previous-notifications/previous-notifications.component';

@NgModule({
  imports: [
    CommonModule,
    SharedModule
  ],
  declarations: [NotificationsComponent, NextNotificationsComponent, PreviousNotificationsComponent],
  providers: [NotificationsService]
})
export class NotificationsModule { }
