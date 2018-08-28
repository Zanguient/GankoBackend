import { Routes } from '@angular/router';
import { VaccinesComponent } from './vaccines.component';
import { ListVaccinesComponent } from './list-vaccines/list-vaccines.component';
import { AddVaccinesComponent } from './add-vaccines/add-vaccines.component';
import { ReApplyVaccinesComponent } from './re-apply-vaccines/re-apply-vaccines.component';
import { DetailVaccinesComponent } from './detail-vaccines/detail-vaccines.component';
import { SelectGroupComponent } from '../core/pages/select-group/select-group.component';
import { SelectBovineComponent } from '../core/pages/select-bovine/select-bovine.component';

export const vaccinesRoutes: Routes = [
    {
        path: 'vacunas', component: VaccinesComponent, children: [
            { path: '', component: ListVaccinesComponent },
            { path: 'agregar', component: AddVaccinesComponent },
            { path: 'aplicar', component: ReApplyVaccinesComponent },
            { path: 'grupos', component: SelectGroupComponent},
            { path: 'bovinos', component: SelectBovineComponent},
            { path: ':id', component: DetailVaccinesComponent }
        ]
    }
];
