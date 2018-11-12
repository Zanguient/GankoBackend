import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { bovinesRoutes } from './bovines/bovines.routing';
import { DashboardComponent } from './core/pages/dashboard/dashboard.component';
import { LoginComponent } from './core/pages/login/login.component';
import { NotFoundComponent } from './core/pages/not-found/not-found.component';
import { farmsRoutes } from './farms/farms.routing';
import { feedRoutes } from './feed/feed.routing';
import { groupRoutes } from './groups/groups.routing';
import { healthRoutes } from './health/health.routing';
import { manageRoutes } from './manage/manage.routing';
import { meadowRoutes } from './meadow/meadow.routing';
import { milkRoutes } from './milk/milk.routing';
import { movementsRoutes } from './movements/movements.routing';
import { notificationsRoutes } from './notifications/notifications.routing';
import { reportsRoutes } from './reports/reports.routing';
import { strawRoutes } from './straw/straw.routing';
import { vaccinesRoutes } from './vaccines/vaccines.routing';
import { ranchersRoutes } from './ranchers/ranchers.routing';
import { usersRoutes } from './users/users.routing';
import { paymentRoutes } from './payments/payments.routing';

const appRoutes: Routes = [
    { path: '', redirectTo: 'login', pathMatch: 'full' },
    { path: 'login', component: LoginComponent },
    ...farmsRoutes,
    {
        path: 'dashboard', component: DashboardComponent, children: [
            ...bovinesRoutes,
            ...feedRoutes,
            ...groupRoutes,
            ...healthRoutes,
            ...manageRoutes,
            ...meadowRoutes,
            ...milkRoutes,
            ...movementsRoutes,
            ...notificationsRoutes,
            ...reportsRoutes,
            ...strawRoutes,
            ...vaccinesRoutes,
            ...ranchersRoutes,
            ...usersRoutes,
            ...paymentRoutes,
            { path: '', redirectTo: 'bovinos', pathMatch: 'full' }
        ]
    },
    { path: '**', component: NotFoundComponent }
];

@NgModule({
    imports: [RouterModule.forRoot(appRoutes)],
    exports: [RouterModule]
})
export class AppRouting { }
