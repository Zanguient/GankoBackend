import { Routes } from '@angular/router';
import { ListBvnComponent } from './list-bvn/list-bvn.component';
import { BovinesComponent } from './bovines.component';
import { AddBvnComponent } from './add-bvn/add-bvn.component';
import { DetailBvnComponent } from './detail-bvn/detail-bvn.component';
import { FeedBvnComponent } from './feed-bvn/feed-bvn.component';
import { HealthBvnComponent } from './health-bvn/health-bvn.component';
import { ManageBvnComponent } from './manage-bvn/manage-bvn.component';
import { MeatBvnComponent } from './meat-bvn/meat-bvn.component';
import { MilkBvnComponent } from './milk-bvn/milk-bvn.component';
import { MovementBvnComponent } from './movement-bvn/movement-bvn.component';
import { ReproductiveBvnComponent } from './reproductive-bvn/reproductive-bvn.component';
import { VaccinationBvnComponent } from './vaccination-bvn/vaccination-bvn.component';
import { AddMeatBvnComponent } from './meat-bvn/add-meat-bvn/add-meat-bvn.component';
import { AddMilkBvnComponent } from './milk-bvn/add-milk-bvn/add-milk-bvn.component';
import { AddReproductiveBvnComponent } from './reproductive-bvn/add-reproductive-bvn/add-reproductive-bvn.component';

export const bovinesRoutes: Routes = [
    {
        path: 'bovinos', component: BovinesComponent, children: [
            { path: '', component: ListBvnComponent },
            { path: 'agregar', component: AddBvnComponent },
            {
                path: ':id', component: DetailBvnComponent, children: [
                    { path: 'alimentacion', component: FeedBvnComponent },
                    { path: 'sanidad', component: HealthBvnComponent },
                    { path: 'manejo', component: ManageBvnComponent },
                    { path: 'ceba', component: MeatBvnComponent },
                    { path: 'leche', component: MilkBvnComponent },
                    { path: 'movimientos', component: MovementBvnComponent },
                    { path: 'reproductivo', component: ReproductiveBvnComponent },
                    { path: 'vacunas', component: VaccinationBvnComponent}
                ]
            },
            { path: ':id/ceba/agregar', component: AddMeatBvnComponent},
            { path: ':id/leche/agregar', component: AddMilkBvnComponent},
            { path: ':id/reproductivo/agregar', component: AddReproductiveBvnComponent}
        ]
    }
];
