import {Page, NavController} from 'ionic-angular';
import {Area} from '../../classes/area';
import {Item} from '../../classes/item';
import {OrderService} from '../../services/order.service';

@Page({
  templateUrl: 'build/pages/live-monitor/live-monitor.html'
})
export class LiveMonitorPage {

  constructor(private nav: NavController, private orderService: OrderService) {}
  
  getOpenOrdersItems() {
      return this.orderService.getOpenOrdersItems();
  }
}
