import { Routes } from '@angular/router';
import { UsersComponent } from './users.component';
import { ListUserComponent } from './list-user/list-user.component';
import { AddUserComponent } from './add-user/add-user.component';


export const usersRoutes: Routes = [
    {
        path: 'usuarios', component: UsersComponent, children: [
            { path: '', component: ListUserComponent },
            { path: 'agregar', component: AddUserComponent }
        ]
    }
];
