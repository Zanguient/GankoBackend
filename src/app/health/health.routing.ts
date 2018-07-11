import { Routes } from '@angular/router';
import { HealthComponent } from './health.component';
import { ListHealthComponent } from './list-health/list-health.component';
import { AddHealthComponent } from './add-health/add-health.component';
import { DetailHealthComponent } from './detail-health/detail-health.component';
import { ReApplyHealthComponent } from './re-apply-health/re-apply-health.component';
import { SelectGroupComponent } from '../core/pages/select-group/select-group.component';

export const healthRoutes: Routes = [
    {
        path: 'sanidad', component: HealthComponent, children: [
            { path: '', component: ListHealthComponent },
            { path: 'agregar', component: AddHealthComponent },
            { path: 'aplicar', component: ReApplyHealthComponent },
            { path: 'seleccionar', component: SelectGroupComponent},
            { path: ':id', component: DetailHealthComponent }
        ]
    }
];
