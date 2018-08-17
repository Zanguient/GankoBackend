import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FeedBvnComponent } from './feed-bvn/feed-bvn.component';
import { HealthBvnComponent } from './health-bvn/health-bvn.component';
import { ManageBvnComponent } from './manage-bvn/manage-bvn.component';
import { MeatBvnComponent } from './meat-bvn/meat-bvn.component';
import { AddMeatBvnComponent } from './meat-bvn/add-meat-bvn/add-meat-bvn.component';
import { MilkBvnComponent } from './milk-bvn/milk-bvn.component';
import { AddMilkBvnComponent } from './milk-bvn/add-milk-bvn/add-milk-bvn.component';
import { MovementBvnComponent } from './movement-bvn/movement-bvn.component';
import { ReproductiveBvnComponent } from './reproductive-bvn/reproductive-bvn.component';
import { ServiceBvnComponent } from './reproductive-bvn/tabs/service-bvn/service-bvn.component';
import { CurrentServiceBvnComponent } from './reproductive-bvn/tabs/current-service-bvn/current-service-bvn.component';
import { AddReproductiveBvnComponent } from './reproductive-bvn/add-reproductive-bvn/add-reproductive-bvn.component';
import { VaccinationBvnComponent } from './vaccination-bvn/vaccination-bvn.component';
import { ListBvnComponent } from './list-bvn/list-bvn.component';
import { AddBvnComponent } from './add-bvn/add-bvn.component';
import { BovinesComponent } from './bovines.component';
import { BovinesService } from './services/bovines.service';
import { SharedModule } from '../shared/shared.module';
import { DetailBvnComponent } from './detail-bvn/detail-bvn.component';
import { RemoveBvnComponent } from './remove-bvn/remove-bvn.component';
import { InfoBvnComponent } from './info-bvn/info-bvn.component';
import { ZealBvnComponent } from './reproductive-bvn/tabs/zeal-bvn/zeal-bvn.component';
import { EmpadreDialogComponent } from './reproductive-bvn/empadre-dialog/empadre-dialog.component';
import { NoveltyDialogComponent } from './reproductive-bvn/novelty-dialog/novelty-dialog.component';

@NgModule({
  imports: [
    CommonModule,
    SharedModule
  ],
  declarations: [FeedBvnComponent, HealthBvnComponent, ManageBvnComponent,
    MeatBvnComponent, AddMeatBvnComponent, MilkBvnComponent, AddMilkBvnComponent,
    MovementBvnComponent, ReproductiveBvnComponent, ServiceBvnComponent,
    CurrentServiceBvnComponent, AddReproductiveBvnComponent, VaccinationBvnComponent, ListBvnComponent,
    AddBvnComponent, BovinesComponent, DetailBvnComponent, RemoveBvnComponent, InfoBvnComponent,
    ZealBvnComponent, ServiceBvnComponent, CurrentServiceBvnComponent, EmpadreDialogComponent, NoveltyDialogComponent],
  entryComponents: [EmpadreDialogComponent, NoveltyDialogComponent],
  providers: [BovinesService]
})
export class BovinesModule { }
