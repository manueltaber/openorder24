import { bootstrap } from '@angular/platform-browser-dynamic';
import { ROUTER_PROVIDERS } from '@angular/router';
import { enableProdMode } from '@angular/core';
import { OpenorderAppComponent, environment } from './app/';

if (environment.production) {
  enableProdMode();
}

bootstrap(OpenorderAppComponent, [ROUTER_PROVIDERS]);
