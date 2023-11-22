import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute,Router } from '@angular/router';
import { UserServiceService } from '../user-service.service';
import { HttpClient } from '@angular/common/http';
import {User} from '../user';
import { FormsModule } from '@angular/forms';
import { Usertype } from '../usertype';
import { UsertypeServiceService } from '../usertype-service.service';


@Component({
  selector: 'app-user-form',
  standalone: true,
  imports: [CommonModule,FormsModule],
  templateUrl: './user-form.component.html',
  styleUrl: './user-form.component.css'
})
export class UserFormComponent {
  user:User;
  updateUsertype:String;
  usertypes:Usertype[];


  constructor(private route:ActivatedRoute,private router:Router,private userService:UserServiceService,private usertypeService:UsertypeServiceService){
    this.user=new User();
    this.usertypes=[];
    this.updateUsertype="";
  }


  ngOnInit(): void {
    let search = window.location.search;
    const params= new URLSearchParams(search);

    if(params.get("update")=="true"){
      // if we update we need data from DB.

      this.userService.findById(params.get("id")).subscribe(data =>
        {
          this.user=data[0];
          this.updateUsertype=this.user.usertype;

          console.log(this.user);
        }
        )


    }



    this.usertypeService.findAll().subscribe(data =>{
      this.usertypes=data;
    })
  }

  onSubmit(){
    this.userService.save(this.user).subscribe(result => this.gotoUserList());
  }

  gotoUserList(){
    this.router.navigate(['/users']);
  }
}
