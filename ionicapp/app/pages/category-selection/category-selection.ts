import {Component} from '@angular/core';
import {NavController, NavParams, AlertController} from 'ionic-angular';

import {Area} from '../../classes/area';
import {Category} from '../../classes/category';

import {ItemSelectionPage} from '../item-selection/item-selection';
import {OrderOverviewPage} from '../order-overview/order-overview';
import {OrderingFooterComponent} from '../../components/ordering-footer/ordering-footer.component';

import {CategoryService} from '../../services/category.service';
import {OrderService} from '../../services/order.service';
import {TranslationService} from '../../services/translation.service';

@Component({
  templateUrl: 'build/pages/category-selection/category-selection.html',
  directives: [OrderingFooterComponent]
})
export class CategorySelectionPage {
  
  area: Area;
  categories: Category[];
  searching: boolean;

  constructor(private nav: NavController, 
              private navParams: NavParams,
              private alertController: AlertController,
              private categoryService: CategoryService, 
              private orderService: OrderService,
              private translationService: TranslationService) {
    this.area = navParams.get('area');
    this.categories = categoryService.getCategories();
    this.searching = false;
  }

  onCategorySelected(event, category: Category) {
    this.nav.push(ItemSelectionPage, {area: this.area, category: category});
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
      let confirm = this.alertController.create({
        title: this.translationService.getTranslation('ATTENTION'),
        message: this.translationService.getTranslation('OPEN_TEMP_ORDERS_WARNING'),
        buttons: [
          { text: this.translationService.getTranslation('YES'),
            handler: () => { this.nav.popToRoot(); }
          },
          { text: this.translationService.getTranslation('NO') }
        ]
      });
      confirm.present();
    } else {
      this.nav.popToRoot();
    }
  }
}
