import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { BovinesModule } from './bovines/bovines.module';
import { CoreModule } from './core/core.module';
import { FarmsModule } from './farms/farms.module';
import { FeedModule } from './feed/feed.module';
import { HealthModule } from './health/health.module';
import { ManageModule } from './manage/manage.module';
import { MeadowModule } from './meadow/meadow.module';
import { MilkModule } from './milk/milk.module';
import { MovementsModule } from './movements/movements.module';
import { StrawModule } from './straw/straw.module';
import { VaccinesModule } from './vaccines/vaccines.module';
import { AppRouting } from './app.routing';
import { GroupsModule } from './groups/groups.module';
import { NotificationsModule } from './notifications/notifications.module';
import { ReportsModule } from './reports/reports.module';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
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
    AppRouting
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
