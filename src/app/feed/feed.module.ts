import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FeedComponent } from './feed.component';
import { ListFeedComponent } from './list-feed/list-feed.component';
import { AddFeedComponent } from './add-feed/add-feed.component';
import { SharedModule } from '../shared/shared.module';
import { FeedService } from './services/feed.service';

@NgModule({
  imports: [
    CommonModule,
    SharedModule
  ],
  declarations: [FeedComponent, ListFeedComponent, AddFeedComponent],
  providers: [FeedService]
})
export class FeedModule { }
