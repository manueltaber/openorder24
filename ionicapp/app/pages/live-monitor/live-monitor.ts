import {Component} from '@angular/core';
import {NavController} from 'ionic-angular';
import {Area} from '../../classes/area';
import {Item} from '../../classes/item';
import {Order} from '../../classes/order';
import {AreaService} from '../../services/area.service';
import {ItemService} from '../../services/item.service';
import {OrderService} from '../../services/order.service';

@Component({
  templateUrl: 'build/pages/live-monitor/live-monitor.html'
})
export class LiveMonitorPage {

  orders: Order[];

  constructor(private nav: NavController, 
              private areaService: AreaService,
              private itemService: ItemService,
              private orderService: OrderService) {
    this.orders = this.orderService.getOpenOrders();
  }

  getArea(area_nr: number) {
    return this.areaService.getAreaByNr(area_nr);
  }

  getItem(item_nr: number) {
    return this.itemService.getItemByNr(item_nr);
  }

  itemDone(event, order: Order) {
    let index = this.orders.indexOf(order, 0);
    if (index > -1) {
      this.orders.splice(index, 1)
    }
  }
}
