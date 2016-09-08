import {Component} from '@angular/core';
import {NavController} from 'ionic-angular';

import {DashboardPage} from '../dashboard/dashboard';

import {AuthService} from '../../services/auth.service';
 
@Component({
    templateUrl: 'build/pages/intro/intro.html'
})
export class IntroPage {

    mySlideOptions = {
        pager: true
    };

    constructor(private nav: NavController,
                private authService: AuthService){
    }
 
    goToLogin(){
        this.authService.login();
        //this.nav.setRoot(DashboardPage);
    }

    goToDashboard(){
        this.nav.setRoot(DashboardPage);
    }
}