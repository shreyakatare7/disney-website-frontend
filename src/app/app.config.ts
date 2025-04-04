import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';
import { AboutComponent } from './pages/about/about.component';
import { ContactComponent } from './pages/contact/contact.component';
import { NavbarComponent } from './components/navbar/navbar.component';

import { routes } from './app.routes';

export const appConfig ={
  imports: [
    AboutComponent,
    ContactComponent,
    NavbarComponent
  ],
  providers: [provideRouter(routes)]
};
