import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import { importProvidersFrom } from '@angular/core';
import { provideRouter } from '@angular/router';

import { MenuComponent } from './app/menu/menu.component';
import { SliderComponent } from './app/slider/slider.component';
import { BodyComponent } from './app/body/body.component';
import { FooterComponent } from './app/footer/footer.component';

bootstrapApplication(AppComponent, {
  providers: [
    provideRouter([]),
    importProvidersFrom(MenuComponent),
    importProvidersFrom(SliderComponent),
    importProvidersFrom(BodyComponent),
    importProvidersFrom(FooterComponent)
  ]
}).catch(err => console.error(err));
