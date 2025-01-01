import { Component, inject, OnInit } from '@angular/core';
import { AuthService } from '../service/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit{
authService: AuthService = inject(AuthService);
  router: Router = inject(Router);
    username: string = "";

  ngOnInit(): void {
    const user = this.authService.getUserData();
    this.username = user.username;
  
  }



logout() {
    this.authService.logout().subscribe({
      next: () => {
        this.router.navigate(['login']); 
      },
      error: (err) => {
        console.error('Logout failed', err);
        alert('An error occurred during logout. Please try again.');
      }
    });
  }
}
