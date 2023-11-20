import { NgModule } from '@angular/core';
import { UserListComponent } from '../user-list/user-list.component';
import { UserFormComponent } from '../user-form/user-form.component';
import {Routes,RouterModule, Router} from '@angular/router'

const routes:Routes=[
  {path:'users',component:UserListComponent},
  {path:'adduser',component:UserFormComponent}
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports:[RouterModule]
})
export class AppRoutingModule { }
