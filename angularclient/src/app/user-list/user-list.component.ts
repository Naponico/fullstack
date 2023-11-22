import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserServiceService } from '../user-service.service';

import { User } from '../user';
import { Router } from '@angular/router';
import { routes } from '../app.routes';


@Component({
  selector: 'app-user-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './user-list.component.html',
  styleUrl: './user-list.component.css'
})
export class UserListComponent implements OnInit{
  users:User[];

  sortedusers:User[];

  constructor (private userService:UserServiceService,private router:Router){
    this.users=[];
    this.sortedusers=[];
  }

  ngOnInit(): void {
    this.userService.findAll().subscribe(data =>{
      this.users=data;
      this.sortedusers=this.users;
    })
  }

  UserFormRedirect(){
    this.router.navigateByUrl("adduser");
  }

  deleteUser(id:String){
    this.userService.delete(id).subscribe(data =>{
        location.reload();      
    })
  }

  updateUser(id:String){
    this.router.navigateByUrl("adduser?update=true&id="+id)
  }

  sortColumn(event: Event) {
    var target = event.target as HTMLElement
    let col = target.getAttribute("sortable")
    switch (col) {
      case "id":
        this.sortedusers = this.SortID(target);
        break;
      case "name":
        this.sortedusers = this.SortName(target);
        break;
      case "firstname":
        this.sortedusers = this.SortFirstname(target);
        break;
      case "email":
        this.sortedusers = this.Sortmail(target);
        break;
      case "usertype":
        this.sortedusers = this.SortType(target);
        break;
    }
  }

  SortID(target: HTMLElement): Array<any> {
    var toSort: Array<any> = this.sortedusers;
    if (target.getAttribute("sorted") === "false") {
      toSort.sort((a: User, b: User) => {
        target.setAttribute("sorted", "true")
        return  parseInt(a.id) - parseInt(b.id);
      });
    } else {
      toSort.sort((a: User, b: User) => {
        target.setAttribute("sorted", "false")
        return parseInt(b.id) - parseInt(a.id)
      });
    }
    return toSort;
  }


  SortName(target: HTMLElement): Array<any> {
    var toSort: Array<any> = this.sortedusers;
    if (target.getAttribute("sorted") === "false") {
      toSort.sort((a: User, b: User) => {
        target.setAttribute("sorted", "true")
        return String(a.name).localeCompare(b.name)
      });
    } else {
      toSort.sort((a: User, b: User) => {
        target.setAttribute("sorted", "false")
        return String(b.name).localeCompare(a.name)
      });
    }
    return toSort;
  }

  SortFirstname(target: HTMLElement): Array<any> {
    var toSort: Array<any> = this.sortedusers;
    if (target.getAttribute("sorted") === "false") {
      toSort.sort((a: User, b: User) => {
        target.setAttribute("sorted", "true")
        return String(a.firstname).localeCompare(b.firstname)
      });
    } else {
      toSort.sort((a: User, b: User) => {
        target.setAttribute("sorted", "false")
        return String(b.firstname).localeCompare(a.firstname)
      });
    }
    return toSort;
  }

  Sortmail(target: HTMLElement): Array<any> {
    var toSort: Array<any> = this.sortedusers;
    if (target.getAttribute("sorted") === "false") {
      toSort.sort((a: User, b: User) => {
        target.setAttribute("sorted", "true")
        return String(a.email).localeCompare(b.email)
      });
    } else {
      toSort.sort((a: User, b: User) => {
        target.setAttribute("sorted", "false")
        return String(b.email).localeCompare(a.email)
      });
    }
    return toSort;
  }

  SortType(target: HTMLElement): Array<any> {
    var toSort: Array<any> = this.sortedusers;
    if (target.getAttribute("sorted") === "false") {
      toSort.sort((a: User, b: User) => {
        target.setAttribute("sorted", "true")
        return String(a.usertype).localeCompare(b.usertype)
      });
    } else {
      toSort.sort((a: User, b: User) => {
        target.setAttribute("sorted", "false")
        return String(b.usertype).localeCompare(a.usertype)
      });
    }
    return toSort;
  }
}
