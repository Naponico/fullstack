import { Routes } from '@angular/router';
import { UserListComponent } from './user-list/user-list.component';
import { UserFormComponent } from './user-form/user-form.component';
import {UsertypeFormComponent} from './usertype-form/usertype-form.component';
import {UsertypeListComponent} from './usertype-list/usertype-list.component';


export const routes: Routes = [
      {path:'users',component:UserListComponent},
      {path:'adduser',component:UserFormComponent},
      {path:'addtype',component:UsertypeFormComponent},
      {path:'types',component:UsertypeListComponent}
];
