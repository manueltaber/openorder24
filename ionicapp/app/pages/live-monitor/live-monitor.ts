import {Component} from '@angular/core';
import {NavController} from 'ionic-angular';
import {Area} from '../../classes/area';
import {Item} from '../../classes/item';
import {OrderService} from '../../services/order.service';

@Component({
  templateUrl: 'build/pages/live-monitor/live-monitor.html'
})
export class LiveMonitorPage {

  items: Item[];

  constructor(private nav: NavController, private orderService: OrderService) {
    this.items = this.orderService.getOpenOrdersItems();
  }

  itemDone(event, item: Item) {
    let index = this.items.indexOf(item, 0);
    if (index > -1) {
      this.items.splice(index, 1)
    }
  }
}
