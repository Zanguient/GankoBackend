import { Routes } from '@angular/router';
import { FeedComponent } from './feed.component';
import { ListFeedComponent } from './list-feed/list-feed.component';
import { AddFeedComponent } from './add-feed/add-feed.component';
import { SelectGroupComponent } from '../core/pages/select-group/select-group.component';
import { SelectBovineComponent } from '../core/pages/select-bovine/select-bovine.component';
import { SelectedBovinesComponent } from '../core/pages/selected-bovines/selected-bovines.component';

export const feedRoutes: Routes = [
    {
        path: 'alimentacion', component: FeedComponent, children: [
            { path: '', component: ListFeedComponent },
            { path: 'agregar', component: AddFeedComponent },
            { path: 'agregar/editar', component: SelectedBovinesComponent },
            { path: 'grupos', component: SelectGroupComponent },
            { path: 'bovinos', component: SelectBovineComponent },
            { path: ':id', component: SelectedBovinesComponent }
        ]
    }
];
