import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../User-Service/user.service';

@Component({
  //The CSS selector that identifies this directive in a template and triggers instantiation of the directive.
  selector: 'app-user-registration',
  templateUrl: './user-registration.component.html',
  styleUrls: ['./user-registration.component.css']
})
export class UserRegistrationComponent implements OnInit {

  constructor(private userService : UserService, private router : Router) { }

  registrationData :any ={};
  
  ngOnInit(): void 
  {
  }

  userRegistration()
  {
    if(this.registrationData.password == this.registrationData.confirmpassword)
    {
      this.userService.userRegister(this.registrationData).subscribe(response =>{
        alert("User Registered Sucessfully ...");
        this.router.navigate(['/User-Authentication/Login']);
      })
    }
    else
    {
      alert("Please Check Confirm Password");
    }
   
  }

}
