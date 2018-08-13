import { Routes } from '@angular/router';
import { MeadowComponent } from './meadow.component';
import { ListMeadowComponent } from './list-meadow/list-meadow.component';
import { DetailMeadowComponent } from './detail-meadow/detail-meadow.component';
import { InfoMeadowComponent } from './info-meadow/info-meadow.component';
import { AlertsMeadowComponent } from './alerts-meadow/alerts-meadow.component';

export const meadowRoutes: Routes = [
    {path: 'praderas', component: MeadowComponent, children: [
        {path: '', component: ListMeadowComponent},
        {path: ':id', component: DetailMeadowComponent, children: [
            {path: '', redirectTo: 'info', pathMatch: 'full'},
            {path: 'info', component: InfoMeadowComponent},
            {path: 'alertas', component: AlertsMeadowComponent}
        ]}
    ]}
];
