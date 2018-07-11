import { Routes } from '@angular/router';
import { StrawComponent } from './straw.component';
import { ListStrawComponent } from './list-straw/list-straw.component';
import { AddStrawComponent } from './add-straw/add-straw.component';

export const strawRoutes: Routes = [
    {
        path: 'pajillas', component: StrawComponent, children: [
            { path: '', component: ListStrawComponent },
            { path: 'agregar', component: AddStrawComponent }
        ]
    }
];
