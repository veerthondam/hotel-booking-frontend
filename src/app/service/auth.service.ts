import { inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { User } from 'src/models/user.model';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private api_url = "http://localhost:5000/api/auth";


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
    return this.http.get<boolean>(`${this.api_url}/check-auth`,{
          withCredentials: true

    });

    
  }

}
