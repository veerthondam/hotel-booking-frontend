import { Component, inject } from '@angular/core';
import { AuthService } from '../service/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {

  authService: AuthService = inject(AuthService);
  router: Router = inject(Router);

logout() {
    this.authService.logout().subscribe({
      next: () => {
        this.router.navigate(['login']); // Redirect to login after successful logout
      },
      error: (err) => {
        console.error('Logout failed', err);
        alert('An error occurred during logout. Please try again.');
      }
    });
  }
}
