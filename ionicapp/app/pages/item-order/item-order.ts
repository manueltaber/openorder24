import {Component} from '@angular/core';
import {NavController, NavParams} from 'ionic-angular';
import {Area} from '../../classes/area';
import {Category} from '../../classes/category';
import {Item} from '../../classes/item';
import {OrderService} from '../../services/order.service';
import {TranslationService} from '../../services/translation.service';

@Component({
  templateUrl: 'build/pages/item-order/item-order.html'
})
export class ItemOrderPage {
  
  area: Area;
  category: Category;
  item: Item;
  count: number;
  desc: string;

  constructor(private nav: NavController, private navParams: NavParams,
              private orderService: OrderService,
              private translationService: TranslationService) {
    this.area = navParams.get('area');
    this.category = navParams.get('category');
    this.item = navParams.get('item');
    this.count = 1;
    this.desc = '';
  }
  
  onConfirmItem(event) {
    this.orderService.addNewTempOrder(this.area, this.item);
    this.nav.pop().then(() => {this.nav.pop()});
  }
}
