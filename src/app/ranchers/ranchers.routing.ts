import { Routes } from '@angular/router';
import { RanchersComponent } from './ranchers.component';
import { ListRancherComponent } from './list-rancher/list-rancher.component';
import { AddRancherComponent } from './add-rancher/add-rancher.component';


export const ranchersRoutes: Routes = [
    {
        path: 'ganaderos', component: RanchersComponent, children: [
            { path: '', component: ListRancherComponent },
            { path: 'agregar', component: AddRancherComponent },
            { path: ':id', component: AddRancherComponent }
        ]
    }
];
