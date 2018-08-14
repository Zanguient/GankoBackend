import { Routes } from '@angular/router';
import { MeadowComponent } from './meadow.component';
import { ListMeadowComponent } from './list-meadow/list-meadow.component';
import { DetailMeadowComponent } from './detail-meadow/detail-meadow.component';
import { InfoMeadowComponent } from './info-meadow/info-meadow.component';
import { AlertsMeadowComponent } from './alerts-meadow/alerts-meadow.component';
import { AddMaintenanceComponent } from './info-meadow/add-maintenance/add-maintenance.component';
import { AddGaugingComponent } from './info-meadow/add-gauging/add-gauging.component';
import { AddAlertComponent } from './alerts-meadow/add-alert/add-alert.component';

export const meadowRoutes: Routes = [
    {path: 'praderas', component: MeadowComponent, children: [
        {path: '', component: ListMeadowComponent},
        {path: ':id', component: DetailMeadowComponent, children: [
            {path: '', redirectTo: 'info', pathMatch: 'full'},
            {path: 'info', component: InfoMeadowComponent},
            {path: 'info/mantenimiento', component: AddMaintenanceComponent},
            {path: 'info/aforo', component: AddGaugingComponent},
            {path: 'alertas', component: AlertsMeadowComponent},
            {path: 'alertas/agregar', component: AddAlertComponent}
        ]}
    ]}
];
