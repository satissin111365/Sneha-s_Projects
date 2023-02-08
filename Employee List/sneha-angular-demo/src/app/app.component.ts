import { Component } from '@angular/core';
import {Router} from '@angular/router';
import UsersJson from './users.json';
 
interface USERS {
    id: Number;
    name: String;
    department: String;
    email: String;
    age: String;
    joiningdate: String;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  title = 'sneha-angular-demo';

  constructor(private router: Router){
  }
  
   goToPage(pageName:string):void{
    this.router.navigate([`${pageName}`]);
  }
  OnClickFunction() {
    this.router.navigate([])
  }
 // Users: USERS[] = UsersJson;
 // constructor(){
   // console.log(this.Users);//
}


