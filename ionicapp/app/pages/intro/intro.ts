import {Component} from '@angular/core';
import {NavController} from 'ionic-angular';

import {DashboardPage} from '../dashboard/dashboard';
 
@Component({
    templateUrl: 'build/pages/intro/intro.html'
})
export class IntroPage {

    mySlideOptions = {
        pager: true
    };

    constructor(private nav: NavController){
    }
 
    goToHome(){
        this.nav.setRoot(DashboardPage);
    }
}