import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GroupsComponent } from './groups.component';
import { ListGroupComponent } from './list-group/list-group.component';
import { AddGroupComponent } from './add-group/add-group.component';
import { SharedModule } from '../shared/shared.module';
import { GroupsService } from './service/groups.service';

@NgModule({
  imports: [
    CommonModule,
    SharedModule
  ],
  declarations: [GroupsComponent, ListGroupComponent, AddGroupComponent],
  providers: [GroupsService]

})
export class GroupsModule { }
