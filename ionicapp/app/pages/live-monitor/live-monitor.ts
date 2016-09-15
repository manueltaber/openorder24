import {Component} from '@angular/core';
import {NavController, AlertController} from 'ionic-angular';

import {Area} from '../../classes/area';
import {Item} from '../../classes/item';
import {Category} from '../../classes/category';
import {Order} from '../../classes/order';

import {BasePage} from '../base';

import {AreaService} from '../../services/area.service';
import {ItemService} from '../../services/item.service';
import {CategoryService} from '../../services/category.service';
import {OrderService} from '../../services/order.service';
import {SettingService} from '../../services/setting.service';
import {TranslationService} from '../../services/translation.service';

@Component({
  templateUrl: 'build/pages/live-monitor/live-monitor.html'
})
export class LiveMonitorPage extends BasePage {

  private liveMonitorItems: LiveMonitorItem[] = [];
  private categoryFilter: string[] =[];

  constructor(protected nav: NavController, 
              protected alertController: AlertController,
              protected areaService: AreaService,
              protected itemService: ItemService,
              protected categoryService: CategoryService,
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
    this.categoryFilter = this.getPageSetting('category_filter');
    if (!this.categoryFilter) {
      this.categoryFilter = [];
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

  private isCategorySelected(category: Category): boolean {
    for (let categoryNr of this.categoryFilter) {
      if (category.nr == Number(categoryNr)) {
        return true;
      }
    }
    return false;
  }

  showCategoryFilterAlert(event) {
    let alert = this.alertController.create();
    alert.setTitle('Kategoriefilter');
    for (let category of this.categoryService.getCategories()) {
      alert.addInput({
        type: 'checkbox',
        label: category.desc,
        value: String(category.nr),
        checked: this.isCategorySelected(category)
      });
    }
    alert.addButton(this.getTranslation('CANCEL'));
    alert.addButton({
      text: this.getTranslation('CONFIRM'),
      handler: data => {
        console.log('Checkbox data:', data);
        this.savePageSetting('category_filter', data);
      }
    });
    alert.present();
  }
}

class LiveMonitorItem {
  area: Area;
  item: Item;
}