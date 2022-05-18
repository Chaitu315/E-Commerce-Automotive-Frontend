import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../User-Service/user.service';

@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.css']
})
//OnInit is A lifecycle hook that is called after Angular has initialized all data-bound properties of a directive
export class UserLoginComponent implements OnInit 
{

  constructor(private userService : UserService, private router : Router) { }

  userDetails : any = {};
  
  //ngOnInit called by Angular when component is initialized
  //ngOnInit will be executed, When Angular done with the creating of component
  ngOnInit(): void {
  }

  Login()
  {
    console.log("inside login()");
    
    this.userService.userLogin().subscribe((data:any)=> {
      console.log("inside Subscribe");
      for (let index = 0; index < data.length; index++) 
      {
        const element = data[index];
        if((this.userDetails.password = element.password) && (this.userDetails.email = element.email))
        {
          this.userService.isLoggedIn = true;
          alert(" User Login Sucessful...");
          this.router.navigate(['/User/E-commerce']);
          break;
        } 
      }
      
    })
    
  }

}
