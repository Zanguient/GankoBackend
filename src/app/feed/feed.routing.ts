import { Routes } from '@angular/router';
import { FeedComponent } from './feed.component';
import { ListFeedComponent } from './list-feed/list-feed.component';
import { AddFeedComponent } from './add-feed/add-feed.component';

export const feedRoutes: Routes = [
    {
        path: 'alimentacion', component: FeedComponent, children: [
            { path: '', component: ListFeedComponent },
            { path: 'agregar', component: AddFeedComponent }
        ]
    }
];
