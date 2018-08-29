import { Routes } from '@angular/router';
import { ListFarmComponent } from './list-farm/list-farm.component';
import { AddFarmComponent } from './add-farm/add-farm.component';
import { FarmsComponent } from './farms.component';

export const farmsRoutes: Routes = [
    {
        path: 'fincas', component: FarmsComponent, children: [
            { path: '', component: ListFarmComponent },
            { path: 'agregar', component: AddFarmComponent },
            { path: ':id', component: AddFarmComponent }
        ]
    }

];
