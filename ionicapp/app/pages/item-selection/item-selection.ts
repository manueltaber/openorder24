import {Component} from '@angular/core';
import {NavController, NavParams, Alert} from 'ionic-angular';

import {Area} from '../../classes/area';
import {Category} from '../../classes/category';
import {Item} from '../../classes/item';

import {ItemOrderPage} from '../item-order/item-order';
import {OrderOverviewPage} from '../order-overview/order-overview';
import {OrderingFooterComponent} from '../../components/ordering-footer/ordering-footer.component';

import {ItemService} from '../../services/item.service';
import {OrderService} from '../../services/order.service';
import {TranslationService} from '../../services/translation.service';

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
              private orderService: OrderService,
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

  onShowTempOrdersOverview() {
    this.nav.push(OrderOverviewPage, {area: this.area});
  }

  onTempOrdersConfirmed() {
    this.nav.popToRoot();
  }

  onTempOrdersCanceled() {
    // if there are open temp orders -> ask user
    if (this.orderService.getTempOrdersByArea(this.area).length > 0) {
      let confirm = Alert.create({
        title: this.translationService.getTranslation('ATTENTION'),
        message: this.translationService.getTranslation('OPEN_TEMP_ORDERS_WARNING'),
        buttons: [
          { text: this.translationService.getTranslation('YES'),
            handler: () => { this.nav.popToRoot(); }
          },
          { text: this.translationService.getTranslation('NO') }
        ]
      });
      this.nav.present(confirm);
    } else {
      this.nav.popToRoot();
    }
  }
}
