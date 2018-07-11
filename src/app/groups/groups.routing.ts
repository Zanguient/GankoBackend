import { Routes } from '@angular/router';
import { GroupsComponent } from './groups.component';
import { ListGroupComponent } from './list-group/list-group.component';
import { SelectBovineComponent } from '../core/pages/select-bovine/select-bovine.component';
import { AddGroupComponent } from './add-group/add-group.component';

export const groupRoutes: Routes = [
    {
        path: 'grupos', component: GroupsComponent, children: [
            { path: '', component: ListGroupComponent },
            { path: 'seleccionar', component: SelectBovineComponent },
            { path: 'agregar', component: AddGroupComponent },
            { path: ':id', component: AddGroupComponent }
        ]
    }
];
