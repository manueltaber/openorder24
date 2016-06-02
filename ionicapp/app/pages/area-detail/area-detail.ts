import {Page, NavController, NavParams} from 'ionic-angular';
import {Area} from '../../classes/area';
import {Order} from '../../classes/order';
import {OrderService} from '../../services/order.service';
import {CategorySelectionPage} from '../category-selection/category-selection';


@Page({
  templateUrl: 'build/pages/area-detail/area-detail.html',
  providers: [OrderService]
})
export class AreaDetailPage {
  
  area: Area;
  order: Order;

  constructor(private nav: NavController, private navParams: NavParams,
              private orderService: OrderService) {
    this.area = navParams.get('area');
  }
  
  onNewOrder(event) {
    this.nav.push(CategorySelectionPage, {
      area: this.area
    });
  }
}
