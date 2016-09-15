import {Component} from '@angular/core';
import {NavController} from 'ionic-angular';

import {Http} from '@angular/http';
import {AuthHttp} from 'angular2-jwt';
import {AuthService} from '../../services/auth.service';
import 'rxjs/add/operator/map';

@Component({
  templateUrl: 'build/pages/http-request-test/http-request-test.html'
})
export class HttpRequestTestPage {

  url: string;
  
  message: string;
  error: string;

  constructor(private nav: NavController, private http: Http, private authHttp: AuthHttp, private auth: AuthService) {
    this.url = "http://localhost:3000";
  }


  sendRequest() {
      // Here we use authHttp to make an authenticated
      // request to the server. Change the endpoint up for
      // one that points to your own server.
      this.authHttp.get(this.url)
        .map(res => res.json())
        .subscribe(
          data => this.message = data,
          err => this.error = err
        );
  }

  securedPing() {
    
  }

}
