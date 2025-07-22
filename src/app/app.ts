import { Component, signal } from '@angular/core';
import { Sidebar } from './layout/sidebar/sidebar';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [Sidebar, RouterOutlet],
  template: `
    <app-sidebar />
    <router-outlet />
  `,
})
export class App {
  protected readonly title = signal('IsmailFakir-portfolio');
}
