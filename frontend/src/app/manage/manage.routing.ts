import { Routes } from '@angular/router';
import { SelectBovineComponent } from '../core/pages/select-bovine/select-bovine.component';
import { SelectGroupComponent } from '../core/pages/select-group/select-group.component';
import { SelectedBovinesComponent } from '../core/pages/selected-bovines/selected-bovines.component';
import { AddManageComponent } from './add-manage/add-manage.component';
import { ListManageComponent } from './list-manage/list-manage.component';
import { ManageComponent } from './manage.component';
import { ReApplyManageComponent } from './re-apply-manage/re-apply-manage.component';

export const manageRoutes: Routes = [
    {
        path: 'manejo', component: ManageComponent, children: [
            { path: '', component: ListManageComponent },
            { path: 'agregar', component: AddManageComponent },
            { path: 'agregar/editar', component: SelectedBovinesComponent },
            { path: ':id/aplicar', component: ReApplyManageComponent },
            { path: ':id/aplicar/editar', component: SelectedBovinesComponent },
            { path: 'grupos', component: SelectGroupComponent},
            { path: 'bovinos', component: SelectBovineComponent},
            { path: ':id', component: SelectedBovinesComponent }
        ]
    }
];
