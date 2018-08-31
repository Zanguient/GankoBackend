import { Routes } from '@angular/router';
import { ReportsComponent } from './reports.component';
import { DetailReportsComponent } from './detail-reports/detail-reports.component';

export const reportsRoutes: Routes = [
    {
        path: 'reportes', component: ReportsComponent, children: [
            { path: '', component: DetailReportsComponent }
        ]
    }
];
