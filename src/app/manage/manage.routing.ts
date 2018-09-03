import { Routes } from '@angular/router';
import { ManageComponent } from './manage.component';
import { ListManageComponent } from './list-manage/list-manage.component';
import { AddManageComponent } from './add-manage/add-manage.component';
import { ReApplyManageComponent } from './re-apply-manage/re-apply-manage.component';
import { DetailManageComponent } from './detail-manage/detail-manage.component';
import { SelectGroupComponent } from '../core/pages/select-group/select-group.component';
import { SelectBovineComponent } from '../core/pages/select-bovine/select-bovine.component';
import { SelectedBovinesComponent } from '../core/pages/selected-bovines/selected-bovines.component';

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
            { path: ':id', component: DetailManageComponent }
        ]
    }
];
