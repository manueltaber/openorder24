import {Component} from '@angular/core';
import {NavController} from 'ionic-angular';

import {Area} from '../../classes/area';
import {Item} from '../../classes/item';
import {Order} from '../../classes/order';

import {BasePage} from '../base';

import {AreaService} from '../../services/area.service';
import {ItemService} from '../../services/item.service';
import {OrderService} from '../../services/order.service';
import {SettingService} from '../../services/setting.service';
import {TranslationService} from '../../services/translation.service';

@Component({
  templateUrl: 'build/pages/live-monitor/live-monitor.html'
})
export class LiveMonitorPage extends BasePage {

  liveMonitorItems: LiveMonitorItem[] = [];

  constructor(protected nav: NavController, 
              protected areaService: AreaService,
              protected itemService: ItemService,
              protected orderService: OrderService,
              protected settingService: SettingService,
              protected translationService: TranslationService) {
    super(settingService, translationService);
    let orders = this.orderService.getOpenOrders();
    for (let order of orders) {
      let liveMonitorItem = new LiveMonitorItem();
      liveMonitorItem.area = areaService.getAreaByNr(order.area.nr);
      liveMonitorItem.item = itemService.getItemByNr(order.item.nr);
      this.liveMonitorItems.push(liveMonitorItem);
    }
  }

  liveMonitorItemsAvailable(): boolean {
    return this.liveMonitorItems.length > 0;
  }

  itemDone(event, liveMonitorItem: LiveMonitorItem) {
    let index = this.liveMonitorItems.indexOf(liveMonitorItem, 0);
    if (index > -1) {
      this.liveMonitorItems.splice(index, 1)
    }
  }
}

class LiveMonitorItem {
  area: Area;
  item: Item;
}