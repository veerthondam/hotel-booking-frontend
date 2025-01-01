import { inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { User } from 'src/models/user.model';
import { catchError, map, Observable, of } from 'rxjs';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private api_url = "http://localhost:5000/api/auth";
   private userData: any;


  constructor() { }

  http: HttpClient = inject(HttpClient);
  router: Router = inject(Router);

  login(loginData: User): Observable<any>{
    return this.http.post(`${this.api_url}/login`, loginData,{
      withCredentials: true
    })
  }
  logout(): Observable<any> {
    return this.http.post(`${this.api_url}/logout`, {}, {
      withCredentials: true
    });
  }

  isAuthenticated(): Observable<boolean>{
    return this.http.get<{ isAuthenticated: boolean, user: any }>(`${this.api_url}/check-auth`,{
      withCredentials: true
    }).pipe(
      map((response) => {
        if(response.isAuthenticated){
          this.userData = response.user;
          return true;
        }
        return false;
      }),
      catchError(() => {
        return of(false);
      })
    )
  }

  setUserData(data: any){
      this.userData = data;
    }

  getUserData(){
      return this.userData
    }

}
