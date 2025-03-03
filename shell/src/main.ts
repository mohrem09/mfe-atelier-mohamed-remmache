import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import { importProvidersFrom } from '@angular/core';
import { provideRouter, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'header',
    loadComponent: () =>
      import('mfeHeader/HeaderComponent').then((m) => m.HeaderComponent),
  },
];

bootstrapApplication(AppComponent, {
  providers: [provideRouter(routes)],
}).catch((err) => console.error(err));
