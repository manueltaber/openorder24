import { bootstrap } from '@angular/platform-browser-dynamic';
import { ROUTER_PROVIDERS } from '@angular/router';
import { HTTP_PROVIDERS } from '@angular/http';
import { enableProdMode } from '@angular/core';
import { OpenorderAppComponent, environment } from './app/';

if (environment.production) {
  enableProdMode();
}

bootstrap(OpenorderAppComponent, [ROUTER_PROVIDERS, HTTP_PROVIDERS]);
