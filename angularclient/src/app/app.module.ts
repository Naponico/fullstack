import { UserServiceService } from "./user-service.service";
import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { HttpClientModule, provideHttpClient } from "@angular/common/http";


import { AppComponent } from "./app.component";
import { FormsModule } from "@angular/forms";
import { UserListComponent } from '/user-list/user-list.component';
import { UserFormComponent } from '/user-form/user-form.component';
import {UserTypeFormComponent} from '/usertype-form.component';
import {UsertypeListComponent} from '/usertype-list.component';

import { RouterModule } from '@angular/router';
import { Routes } from "@angular/router";

const routes:Routes=[
      {path:'users',component:UserListComponent},
      {path:'adduser',component:UserFormComponent},
      {path:'addtype',component:UserTypeComponent},
      {path:'types',component:UserTypeListComponent}
  ];

@NgModule({
    declarations:[
        AppComponent,
        UserListComponent,
        UserFormComponent
    ],
    imports:[
        BrowserModule,
        HttpClientModule,
        FormsModule,
        RouterModule.forRoot(routes)
    ],
    providers:[UserServiceService,HttpClientModule,provideHttpClient()],
    bootstrap:[AppComponent],

})
export class AppModule{}
