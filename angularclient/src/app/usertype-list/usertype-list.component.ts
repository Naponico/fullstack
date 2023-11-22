import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Router } from '@angular/router';

import { UsertypeServiceService } from '../usertype-service.service';
import { Usertype } from '../usertype';

@Component({
  selector: 'app-usertype-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './usertype-list.component.html',
  styleUrl: './usertype-list.component.css'
})
export class UsertypeListComponent {
  usertypes:Usertype[];

  sortedUsertypes:Usertype[];
  constructor(private usertypeService:UsertypeServiceService,private router:Router){
    this.usertypes=[];
    this.sortedUsertypes=[];
  }

  ngOnInit(): void {
    this.usertypeService.findAll().subscribe(data =>{
      this.usertypes=data;
      this.sortedUsertypes=this.usertypes;
    })
  }



  TypeUserFormRedirect() {
    this.router.navigateByUrl("addtype");
  }


  deleteUsertype(id:string){
    this.usertypeService.delete(id).subscribe(data =>{
      location.reload();      
  })
  }

  updateUsertype(id:string){
    this.router.navigateByUrl("addtype?update=true&id="+id);
  }



  sortColumn(event: Event) {
    var target = event.target as HTMLElement
    let col = target.getAttribute("sortable")
    switch (col) {
      case "id":
        this.sortedUsertypes = this.SortID(target);
        break;
      case "label":
        this.sortedUsertypes = this.SortLabel(target);
        break;
    }
  }

  SortID(target: HTMLElement): Array<any> {
    var toSort: Array<any> = this.sortedUsertypes;
    if (target.getAttribute("sorted") === "false") {
      toSort.sort((a: Usertype, b: Usertype) => {
        target.setAttribute("sorted", "true")
        return  parseInt(a.id) - parseInt(b.id);
      });
    } else {
      toSort.sort((a: Usertype, b: Usertype) => {
        target.setAttribute("sorted", "false")
        return parseInt(b.id) - parseInt(a.id)
      });
    }
    return toSort;
  }


  SortLabel(target: HTMLElement): Array<any> {
    var toSort: Array<any> = this.sortedUsertypes;
    if (target.getAttribute("sorted") === "false") {
      toSort.sort((a: Usertype, b: Usertype) => {
        target.setAttribute("sorted", "true")
        return String(a.usertype).localeCompare(b.usertype)
      });
    } else {
      toSort.sort((a: Usertype, b: Usertype) => {
        target.setAttribute("sorted", "false")
        return String(b.usertype).localeCompare(a.usertype)
      });
    }
    return toSort;
  }
}
