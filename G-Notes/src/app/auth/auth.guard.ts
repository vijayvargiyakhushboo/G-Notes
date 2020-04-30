import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, CanActivate } from '@angular/router';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate  {
  constructor( private router: Router) {
  }
    canActivate(): boolean {
   const token = localStorage.getItem('access_token');
    if (!token) {
      this.router.navigate(['']);
      return false;
    }
    return true;
  }
}
