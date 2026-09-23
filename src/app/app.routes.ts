import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('./features/home/home-page.component').then((m) => m.HomePageComponent),
    title: 'Salma Momani | Portfolio',
  },
  {
    path: 'about',
    loadComponent: () =>
      import('./features/about/about-page.component').then((m) => m.AboutPageComponent),
    title: 'Salma Momani | About',
  },
  {
    path: 'projects',
    loadComponent: () =>
      import('./features/projects/projects-page.component').then((m) => m.ProjectsPageComponent),
    title: 'Salma Momani | Projects',
  },
  {
    path: 'projects/:slug',
    loadComponent: () =>
      import('./features/project-details/project-details-page.component').then(
        (m) => m.ProjectDetailsPageComponent,
      ),
  },
  {
    path: 'contact',
    loadComponent: () =>
      import('./features/contact/contact-page.component').then((m) => m.ContactPageComponent),
    title: 'Salma Momani | Contact',
  },
  {
    path: '**',
    redirectTo: '',
  },
];
