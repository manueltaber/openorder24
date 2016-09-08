import {Component} from '@angular/core';
import {NavController} from 'ionic-angular';

@Component({
  templateUrl: 'build/pages/http-request-test/http-request-test.html'
})
export class HttpRequestTestPage {

  url: string;

  constructor(private nav: NavController) {
  }

  sendRequest() {
      
  }

}
