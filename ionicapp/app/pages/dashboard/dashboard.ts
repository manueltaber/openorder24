import {Page, NavController} from 'ionic-angular';
import {AreaSelectionPage} from '../area-selection/area-selection';


@Page({
  templateUrl: 'build/pages/dashboard/dashboard.html'
})
export class DashboardPage {
  constructor(private nav: NavController) {

  }
  
  startOrdering(event) {
    this.nav.push(AreaSelectionPage);
  }
}
