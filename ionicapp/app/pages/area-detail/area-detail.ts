import {Page, NavController, NavParams} from 'ionic-angular';


@Page({
  templateUrl: 'build/pages/area-detail/area-detail.html'
})
export class AreaDetailPage {
  area: any;

  constructor(private nav: NavController, navParams: NavParams) {
    // If we navigated to this page, we will have an item available as a nav param
    this.area = navParams.get('area');
  }
}
