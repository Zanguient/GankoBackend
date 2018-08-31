import { Routes } from '@angular/router';
import { MovementsComponent } from './movements.component';
import { ListMovementsComponent } from './list-movements/list-movements.component';

export const movementsRoutes: Routes = [
    {
        path: 'movimientos', component: MovementsComponent, children: [
            { path: '', component: ListMovementsComponent }]
    }
];
