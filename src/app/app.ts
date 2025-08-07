import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet, RouterLink } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, RouterLink],
  template: `
    <nav style="padding: 1rem; background-color: #ffffff; border-bottom: 1px solid #ddd; margin-bottom: 2rem;">
      <a routerLink="/" style="margin-right: 1rem; text-decoration: none; color: #333;">Home</a>
      <a routerLink="/recipes" style="margin-right: 1rem; text-decoration: none; color: #333;">Recipes</a>
      <a routerLink="/submit" style="text-decoration: none; color: #333;">Submit Recipe</a>
    </nav>

    <router-outlet />
  `
})
export class App {}
