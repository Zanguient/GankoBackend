import { Routes } from '@angular/router';
import { SelectBovineComponent } from '../core/pages/select-bovine/select-bovine.component';
import { AddGroupComponent } from './add-group/add-group.component';
import { DetailGroupComponent } from './detail-group/detail-group.component';
import { GroupsComponent } from './groups.component';
import { ListGroupComponent } from './list-group/list-group.component';
import { SelectedBovinesComponent } from '../core/pages/selected-bovines/selected-bovines.component';

export const groupRoutes: Routes = [
    {
        path: 'grupos', component: GroupsComponent, children: [
            { path: '', component: ListGroupComponent },
            { path: 'seleccionar', component: SelectBovineComponent },
            { path: 'agregar', component: AddGroupComponent },
            { path: ':id', component: DetailGroupComponent },
            { path: ':id/bovinos', component: SelectedBovinesComponent }
        ]
    }
];
