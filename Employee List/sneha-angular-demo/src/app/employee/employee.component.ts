import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import UsersJson from '../users.json';

interface USERS {
  id: Number;
  name: String;
  department: String;
  email: String;
  age: String;
  joiningdate: String;
}


@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit{
  Users: USERS[] = UsersJson;
  constructor(private router: Router){
    console.log(this.Users);
  }
  ngOnInit(): void {
  }
  goToPage(pageName:string):void{
    this.router.navigate([`${pageName}`]);
  }
  OnClickFunction() {
    this.router.navigate([])
  }

}

