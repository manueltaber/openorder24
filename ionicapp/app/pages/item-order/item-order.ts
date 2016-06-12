import {Component} from '@angular/core';
import {NavController, NavParams} from 'ionic-angular';
import {Area} from '../../classes/area';
import {Item} from '../../classes/item';
import {OrderService} from '../../services/order.service';
import {TranslationService} from '../../services/translation.service';

@Component({
  templateUrl: 'build/pages/item-order/item-order.html'
})
export class ItemOrderPage {
  
  area: Area;
  item: Item;

  constructor(private nav: NavController, private navParams: NavParams,
              private orderService: OrderService,
              private translationService: TranslationService) {
    this.area = navParams.get('area');
    this.item = navParams.get('item');
  }
  
  onConfirmItem(event, mode) {
    this.orderService.addNewTempOrder(this.area, this.item);
    if (mode == 0) {
      this.nav.pop().then(() => {this.nav.pop()});
    } else {
      this.nav.pop();
    }
  }
}
