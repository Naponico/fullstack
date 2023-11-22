import { NgModule } from '@angular/core';

import { UserListComponent } from '../user-list/user-list.component';
import { UserFormComponent } from '../user-form/user-form.component';
import { UsertypeListComponent } from '../usertype-list/usertype-list.component';
import {UsertypeFormComponent} from '../usertype-form/usertype-form.component';


import {Routes,RouterModule, Router} from '@angular/router'

const routes:Routes=[
  {path:'users',component:UserListComponent},
  {path:'adduser',component:UserFormComponent},
  {path:'types',component:UsertypeListComponent},
  {path:'addtype',component:UsertypeFormComponent}
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes,{ onSameUrlNavigation: 'reload' })],
  exports:[RouterModule]
})
export class AppRoutingModule { }
