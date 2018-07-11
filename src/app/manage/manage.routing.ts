import { Routes } from '@angular/router';
import { ManageComponent } from './manage.component';
import { ListManageComponent } from './list-manage/list-manage.component';
import { AddManageComponent } from './add-manage/add-manage.component';
import { ReApplyManageComponent } from './re-apply-manage/re-apply-manage.component';
import { DetailManageComponent } from './detail-manage/detail-manage.component';
import { SelectGroupComponent } from '../core/pages/select-group/select-group.component';

export const manageRoutes: Routes = [
    {
        path: 'manejo', component: ManageComponent, children: [
            { path: '', component: ListManageComponent },
            { path: 'agregar', component: AddManageComponent },
            { path: 'aplicar', component: ReApplyManageComponent },
            { path: 'seleccionar', component: SelectGroupComponent},
            { path: ':id', component: DetailManageComponent }
        ]
    }
];
