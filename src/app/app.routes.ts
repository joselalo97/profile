import { Routes } from '@angular/router';
import { NotFoundComponent } from './module/not-found/not-found.component';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'profile',
    pathMatch: 'full',
  },
  {
    path: 'profile',
    title: 'Jóse Eduardo González Amieva',
    loadComponent: () =>
      import('./module/profile-info/profile-info.component').then(
        (m) => m.ProfileInfoComponent
      ),
  },
  {
    path: '**',
    title: '404',
    component: NotFoundComponent,
  },
];
