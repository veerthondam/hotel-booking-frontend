import { CanActivateFn, Router } from '@angular/router';
import { AuthService } from '../service/auth.service';
import { inject } from '@angular/core';
import { catchError, map, of } from 'rxjs';

export const authGuard: CanActivateFn = (route, state) => {

  const authService = inject(AuthService);
  const router = inject(Router);


return authService.isAuthenticated().pipe(
  map((isAuthenticated: boolean) => {
    if(isAuthenticated){
      return true;
    }else{
      router.navigate(['login']);
      return false;
    }
  }),
catchError((error) => {
      router.navigate(['login']); 
      return of(false); 
    })
)

};
