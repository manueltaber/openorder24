import {Component} from '@angular/core';
import {NavController, NavParams} from 'ionic-angular';
import {Area} from '../../classes/area';
import {Order} from '../../classes/order';
import {OrderService} from '../../services/order.service';
import {TranslationService} from '../../services/translation.service';
import {CategorySelectionPage} from '../category-selection/category-selection';
import {AccountingOverviewPage} from '../accounting-overview/accounting-overview';

@Component({
  templateUrl: 'build/pages/area-detail/area-detail.html'
})
export class AreaDetailPage {
  
  area: Area;

  constructor(private nav: NavController, 
              private navParams: NavParams,
              private orderService: OrderService,
              private translationService: TranslationService) {
    this.area = navParams.get('area');
  }
  
  getOpenOrderCount() {
    return this.orderService.getOpenOrdersCountByArea(this.area);
  }
  
  getOpenOrderAmount() {
    return this.orderService.getOpenOrdersAmountByArea(this.area);
  }
  
  onNewOrder(event) {
    this.nav.push(CategorySelectionPage, {area: this.area});
  }
  
  onAccounting(event) {
    this.nav.push(AccountingOverviewPage, {area: this.area});
  }
}
