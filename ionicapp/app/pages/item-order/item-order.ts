import {Page, NavController, NavParams} from 'ionic-angular';
import {Area} from '../../classes/area';
import {Item} from '../../classes/item';
import {CategorySelectionPage} from '../category-selection/category-selection';
import {ItemSelectionPage} from '../item-selection/item-selection';
import {OrderService} from '../../services/order.service';

@Page({
  templateUrl: 'build/pages/item-order/item-order.html'
})
export class ItemOrderPage {
  
  area: Area;
  item: Item;

  constructor(private nav: NavController, private navParams: NavParams,
              private orderService: OrderService) {
    this.area = navParams.get('area');
    this.item = navParams.get('item');
  }
  
  onConfirmItem(event, mode) {
    this.orderService.addNewTempOrder(this.area, this.item);
    //this.nav.popTo(CategorySelectionPage);
    this.nav.pop().then(() => {this.nav.pop()});
  }
}
