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

  liveMonitorItems: LiveMonitorItem[] = [];

  constructor(private nav: NavController, 
              private areaService: AreaService,
              private itemService: ItemService,
              private orderService: OrderService) {
    let orders = this.orderService.getOpenOrders();
    for (let order of orders) {
      let liveMonitorItem = new LiveMonitorItem();
      liveMonitorItem.area = areaService.getAreaByNr(order.area.nr);
      liveMonitorItem.item = itemService.getItemByNr(order.item.nr);
      this.liveMonitorItems.push(liveMonitorItem);
    }
  }

  itemDone(event, liveMonitorItem: LiveMonitorItem) {
    let index = this.liveMonitorItems.indexOf(liveMonitorItem, 0);
    if (index > -1) {
      this.liveMonitorItems.splice(index, 1)
    }
  }
}

export class LiveMonitorItem {
  area: Area;
  item: Item;
}