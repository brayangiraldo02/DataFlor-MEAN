import { Router } from '@angular/router';
import decodeToken from 'jwt-decode';
import { CanActivate } from '@angular/router';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class TokenGuardAdmin implements CanActivate {
  constructor(private router: Router) { }

   canActivate(): boolean {
    const token:any = localStorage.getItem('token')
    const tokenDesencripted:any  = decodeToken(token)

    if (tokenDesencripted.user.role === 'Admin') {
      console.log(tokenDesencripted.role)
      return true;
    } else {
      this.router.navigate(['']);
      return false;
    }
  }

}

// export const adminGuard: CanActivateFn = (route, state) => {
//   return true;
// };