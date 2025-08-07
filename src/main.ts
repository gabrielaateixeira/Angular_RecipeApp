import 'zone.js';  // obrigatório
import { bootstrapApplication } from '@angular/platform-browser';
import { App } from './app/app';
import { appConfig } from './app/app.config';
import { importProvidersFrom } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';

bootstrapApplication(App, {
  providers: [
    ...appConfig.providers,
    importProvidersFrom(HttpClientModule, ReactiveFormsModule)
  ]
});
