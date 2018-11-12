import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';
import { AppRouting } from './app.routing';
import { BovinesModule } from './bovines/bovines.module';
import { CoreModule } from './core/core.module';
import { FarmsModule } from './farms/farms.module';
import { FeedModule } from './feed/feed.module';
import { GroupsModule } from './groups/groups.module';
import { HealthModule } from './health/health.module';
import { ManageModule } from './manage/manage.module';
import { MeadowModule } from './meadow/meadow.module';
import { MilkModule } from './milk/milk.module';
import { MovementsModule } from './movements/movements.module';
import { NotificationsModule } from './notifications/notifications.module';
import { ReportsModule } from './reports/reports.module';
import { StrawModule } from './straw/straw.module';
import { VaccinesModule } from './vaccines/vaccines.module';
import {MomentDateAdapter} from '@angular/material-moment-adapter';
import {DateAdapter, MAT_DATE_FORMATS, MAT_DATE_LOCALE} from '@angular/material/core';
import { ColorPickerModule } from 'ngx-color-picker';
import { UsersModule } from './users/users.module';
import { RanchersModule } from './ranchers/ranchers.module';
import { PaymentsModule } from './payments/payments.module';

export const MY_FORMATS = {
  parse: {
    dateInput: 'LL',
  },
  display: {
    dateInput: 'YYYY-MM-DD',
    monthYearLabel: 'MMM YYYY',
    dateA11yLabel: 'LL',
    monthYearA11yLabel: 'MMMM YYYY',
  },
};


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    ColorPickerModule,
    CoreModule,
    BovinesModule,
    FarmsModule,
    FeedModule,
    HealthModule,
    ManageModule,
    MeadowModule,
    MilkModule,
    MovementsModule,
    StrawModule,
    VaccinesModule,
    GroupsModule,
    NotificationsModule,
    ReportsModule,
    UsersModule,
    RanchersModule,
    PaymentsModule,
    AppRouting
  ],
  providers: [
    {provide: DateAdapter, useClass: MomentDateAdapter, deps: [MAT_DATE_LOCALE]},
    {provide: MAT_DATE_FORMATS, useValue: MY_FORMATS}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
