import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AdminService } from '../Admin-Service/admin.service';

@Component({
  selector: 'app-admin-login',
  templateUrl: './admin-login.component.html',
  styleUrls: ['./admin-login.component.css']
})
export class AdminLoginComponent implements OnInit {

  constructor(private router : Router, private adminService : AdminService) { }

  adminLoginData : any = {};
  
  ngOnInit(): void {
  }

  adminLogin()
  {
    this.adminService.adminLogin().subscribe((data:any)=> {
      console.log("inside Subscribe");
      for (let index = 0; index < data.length; index++) 
      {
        const element = data[index];
        if((this.adminLoginData.password = element.password) && (this.adminLoginData.email = element.adminEmail))
        {
          this.adminService.isLoggedIn = true;
          alert(" Admin Login Sucessful...");
          this.router.navigate(['Admin/E-commerce'])
          break;
        } 
      }
      
    })
    
  }

}
