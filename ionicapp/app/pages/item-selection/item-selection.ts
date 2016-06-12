import {Component} from '@angular/core';
import {NavController, NavParams} from 'ionic-angular';
import {Area} from '../../classes/area';
import {Category} from '../../classes/category';
import {Item} from '../../classes/item';
import {ItemService} from '../../services/item.service';
import {TranslationService} from '../../services/translation.service';
import {ItemOrderPage} from '../item-order/item-order';
import {OrderingFooterComponent} from '../../components/ordering-footer/ordering-footer.component';

@Component({
  templateUrl: 'build/pages/item-selection/item-selection.html',
  directives: [OrderingFooterComponent]
})
export class ItemSelectionPage {
  
  area: Area;
  category: Category;
  items: Item[];
  searching: boolean;

  constructor(private nav: NavController, 
              private navParams: NavParams, 
              private itemService: ItemService,
              private translationService: TranslationService) {
    this.area = navParams.get('area');
    this.category = navParams.get('category');
    this.items = itemService.getItemsByCategory(this.category);
    this.searching = false;
  }
  
  onItemSelected(event, item) {
    this.nav.push(ItemOrderPage, {
      area: this.area, category: this.category, item: item
    });
  }

  onTempOrdersConfirmed() {
    this.nav.popToRoot();
  }

  onTempOrdersCanceled() {
    this.nav.popToRoot();
  }
}
