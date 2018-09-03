import { Routes } from '@angular/router';
import { HealthComponent } from './health.component';
import { ListHealthComponent } from './list-health/list-health.component';
import { AddHealthComponent } from './add-health/add-health.component';
import { DetailHealthComponent } from './detail-health/detail-health.component';
import { ReApplyHealthComponent } from './re-apply-health/re-apply-health.component';
import { SelectGroupComponent } from '../core/pages/select-group/select-group.component';
import { SelectBovineComponent } from '../core/pages/select-bovine/select-bovine.component';
import { SelectedBovinesComponent } from '../core/pages/selected-bovines/selected-bovines.component';

export const healthRoutes: Routes = [
    {
        path: 'sanidad', component: HealthComponent, children: [
            { path: '', component: ListHealthComponent },
            { path: 'agregar', component: AddHealthComponent },
            { path: 'agregar/editar', component: SelectedBovinesComponent },
            { path: ':id/aplicar', component: ReApplyHealthComponent },
            { path: ':id/aplicar/editar', component: SelectedBovinesComponent },
            { path: 'grupos', component: SelectGroupComponent},
            { path: 'bovinos', component: SelectBovineComponent},
            { path: ':id', component: DetailHealthComponent }
        ]
    }
];
