import { provideRouter, Routes } from '@angular/router';
import { Home } from './pages/home/home';
import { Recipes } from './pages/recipes/recipes';
import { Submit } from './pages/submit/submit';

const routes: Routes = [
  { path: '', component: Home },
  { path: 'recipes', component: Recipes },
  { path: 'submit', component: Submit }
];

export const appConfig = {
  providers: [provideRouter(routes)],
};
