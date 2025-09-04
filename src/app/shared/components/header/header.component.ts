import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../../features/auth/services/auth.service';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [],
  template: `
    <header class="bg-blue-600 text-white p-4">
      <div class="container mx-auto flex justify-between items-center">
        <h1 class="text-2xl font-bold">TodoList App</h1>
        <nav>
          <ul class="flex space-x-4">
            <li><a routerLink="/todos" class="hover:text-blue-200">Todos</a></li>
            <li><a routerLink="/admin" class="hover:text-blue-200">Admin</a></li>
            <li><button (click)="logout()" class="hover:text-blue-200">Logout</button></li>
          </ul>
        </nav>
      </div>
    </header>
  `,
  styles: []
})
export class HeaderComponent {
  private authService = inject(AuthService);
  private router = inject(Router);

  logout() {
    this.authService.logout();
    this.router.navigate(['/auth/login']);
  }
}