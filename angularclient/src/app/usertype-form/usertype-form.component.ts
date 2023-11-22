import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Usertype } from '../usertype';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import {UsertypeServiceService } from '../usertype-service.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-usertype-form',
  standalone: true,
  imports: [CommonModule,FormsModule],
  templateUrl: './usertype-form.component.html',
  styleUrl: './usertype-form.component.css'
})
export class UsertypeFormComponent {
  userType:Usertype

  constructor(private route:ActivatedRoute,private router:Router,private usertypeService:UsertypeServiceService){
    this.userType=new Usertype();
  }

  ngOnInit():void{
    let search= window.location.search;
    const params=new URLSearchParams(search)

    if(params.get("update")==="true"){
      this.usertypeService.findById(params.get("id")).subscribe(data =>{
        this.userType=data[0];

      })
    }


  }


  onSubmit(){
    this.usertypeService.save(this.userType).subscribe(result => this.gotoTypeList());
  }

  gotoTypeList(){
    this.router.navigate(['/types']);
  }
}
