import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';


export class AuthGuard implements CanActivate {
  canActivate(
   ) {
     console.log("guarding")
    return true;
  }
}
