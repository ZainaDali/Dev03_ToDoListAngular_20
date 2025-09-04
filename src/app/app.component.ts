import { Component, inject } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';
// Update the import path to match the actual file location and name
import { PwaPromptComponent } from './shared/components/pwa-prompt/pwa-prompt.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, PwaPromptComponent],
  template: `
    <router-outlet></router-outlet>
    <app-pwa-prompt />
  `,
})
export class AppComponent {
  private router = inject(Router);

  constructor() {
    console.log('👉 Routes configurées :', this.router.config);
  }
}
