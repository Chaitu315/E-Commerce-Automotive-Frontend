import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, CanActivateChild, CanDeactivate, CanLoad, Route, Router, RouterStateSnapshot, UrlSegment, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { UserService } from '../User-Service/user.service';

@Injectable({
  providedIn: 'root'
})
export class UserGuard implements CanActivate
{

  constructor(private userService : UserService, private router : Router) {}

  canActivate( route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree 
  {
    console.log("state.url");
    console.log(state.url);
    console.log(this.checkLogin(state.url));
    
    
    return this.checkLogin(state.url);
  }

  checkLogin(url: string) 
  {
    if (this.userService.isLoggedIn) 
    {
      console.log(this.userService.isLoggedIn);
      
      return this.userService.isLoggedIn;
    }
    else
    {
      // this.userService.redirectUrl = url;
      
      return this.router.parseUrl('/User-Authentication/Login');
    }
  }

  
}
