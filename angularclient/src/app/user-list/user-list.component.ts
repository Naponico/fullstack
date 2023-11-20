import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserServiceService } from '../user-service.service';

import { User } from '../user';
@Component({
  selector: 'app-user-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './user-list.component.html',
  styleUrl: './user-list.component.css'
})
export class UserListComponent implements OnInit{
  users:User[];


  constructor (private userService:UserServiceService){
    this.users=[];
  }

  ngOnInit(): void {
    this.userService.findAll().subscribe(data =>{
      this.users=data;
    })
  }
}
