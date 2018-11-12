import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsersComponent } from './users.component';
import { ListUserComponent } from './list-user/list-user.component';
import { AddUserComponent } from './add-user/add-user.component';
import { SharedModule } from '../shared/shared.module';
import { UsersService } from './services/users.service';

@NgModule({
  imports: [
    CommonModule,
    SharedModule
  ],
  declarations: [UsersComponent, ListUserComponent, AddUserComponent],
  providers: [UsersService]
})
export class UsersModule { }
