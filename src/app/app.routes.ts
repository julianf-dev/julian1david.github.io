import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('@shared/components/layout/layout.component').then(m => m.LayoutComponent),
    children: []
  }
  ,
  {
    path: '**',
    loadComponent: () => import( '@shared/components/not-found/not-found.component').then(m => m.NotFoundComponent),
  },
]
