import {Page, NavController, NavParams} from 'ionic-angular';
import {Category} from '../../classes/category';
import {Item} from '../../classes/item';
import {ItemService} from '../../services/item.service';
import {ItemOrderPage} from '../item-order/item-order';

@Page({
  templateUrl: 'build/pages/item-selection/item-selection.html',
  providers: [ItemService]
})
export class ItemSelectionPage {
  
  category: Category;
  items: Item[];
  searching: boolean;

  constructor(private nav: NavController, private navParams: NavParams, 
              private itemService: ItemService) {
    this.category = navParams.get('category');
    this.items = itemService.getItems(this.category);
    this.searching = false;
  }
  
  onItemSelected(event, item) {
    this.nav.push(ItemOrderPage, {
      item: item
    });
  }
}
