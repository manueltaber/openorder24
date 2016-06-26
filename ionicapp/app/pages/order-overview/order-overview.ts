import {Component} from '@angular/core';
import {NavController, NavParams, Alert} from 'ionic-angular';
import {Area} from '../../classes/area';
import {Order} from '../../classes/order';
import {OrderService} from '../../services/order.service';
import {TranslationService} from '../../services/translation.service';
import {OrderingFooterComponent} from '../../components/ordering-footer/ordering-footer.component';

@Component({
  templateUrl: 'build/pages/order-overview/order-overview.html',
  directives: [OrderingFooterComponent]
})
export class OrderOverviewPage {
  
  area: Area;
  orders: Order[];

  constructor(private nav: NavController, 
              private navParams: NavParams,
              private orderService: OrderService,
              private translationService: TranslationService) {
    this.area = navParams.get('area');
    this.orders = orderService.getTempOrdersByArea(this.area);
  }

  onTempOrdersConfirmed() {
    this.nav.popToRoot();
  }

  onTempOrdersCanceled() {
    this.nav.popToRoot();
  }

}
