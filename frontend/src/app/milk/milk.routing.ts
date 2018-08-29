import { Routes } from '@angular/router';
import { MilkComponent } from './milk.component';
import { ListMilkComponent } from './list-milk/list-milk.component';
import { AddMilkComponent } from './add-milk/add-milk.component';

export const milkRoutes: Routes = [
    {
        path: 'leche', component: MilkComponent, children: [
            { path: '', component: ListMilkComponent },
            { path: 'agregar', component: AddMilkComponent }
        ]
    }
];
