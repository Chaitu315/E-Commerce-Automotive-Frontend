import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AdminService } from '../Admin-Service/admin.service';

@Injectable({
  providedIn: 'root'
})
export class AdminGuard implements CanActivate 
{

  constructor(private adminService : AdminService, private router : Router) {}

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree 
  {
    return this.checkLogin(state.url);
  }

  checkLogin(url: string) 
  {
    if (this.adminService.isLoggedIn) 
    {
      console.log(this.adminService.isLoggedIn);
      
      return this.adminService.isLoggedIn;
    }
    else
    {
      this.adminService.redirectUrl = url;
      
      return this.router.parseUrl('/Admin-Authentication/Login');
    }
  }

  
}
