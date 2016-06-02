import {Page, NavController, NavParams} from 'ionic-angular';
import {Item} from '../../classes/item';
import {CategorySelectionPage} from '../category-selection/category-selection';


@Page({
  templateUrl: 'build/pages/item-order/item-order.html'
})
export class ItemOrderPage {
  
  item: Item;

  constructor(private nav: NavController, private navParams: NavParams) {
    this.item = navParams.get('item');
  }
}
