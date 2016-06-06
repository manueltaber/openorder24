import {Page, NavController, NavParams} from 'ionic-angular';
import {Area} from '../../classes/area';
import {Order} from '../../classes/order';
import {OrderService} from '../../services/order.service';

@Page({
  templateUrl: 'build/pages/accounting-overview/accounting-overview.html'
})
export class AccountingOverviewPage {
  
  area: Area;
  orders: Order[];
  searching: boolean;

  constructor(private nav: NavController, private navParams: NavParams,
              private orderService: OrderService) {
    //this.areas = AREAS;
    this.area = navParams.get('area');
    this.orders = orderService.getOpenOrdersByArea(this.area);
    this.searching = false;
  }
  
  onOrderSelected(event, order: Order) {
    /*this.nav.push(ItemSelectionPage, {
      category: category
    });*/
  }
}
