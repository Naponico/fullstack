import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute,Router } from '@angular/router';
import { UserServiceService } from '../user-service.service';
import { HttpClient } from '@angular/common/http';
import {User} from '../user';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-user-form',
  standalone: true,
  imports: [CommonModule,FormsModule],
  templateUrl: './user-form.component.html',
  styleUrl: './user-form.component.css'
})
export class UserFormComponent {
  user:User;

  constructor(private route:ActivatedRoute,private router:Router,private userService:UserServiceService){
    this.user=new User();
  }

  onSubmit(){
    this.userService.save(this.user).subscribe(result => this.gotoUserList());
  }

  gotoUserList(){
    this.router.navigate(['/users']);
  }
}