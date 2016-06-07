import {Page, NavController, NavParams} from 'ionic-angular';
import {Area} from '../../classes/area';
import {Item} from '../../classes/item';
import {Order} from '../../classes/order';
import {OrderService} from '../../services/order.service';

@Page({
  templateUrl: 'build/pages/accounting-overview/accounting-overview.html'
})
export class AccountingOverviewPage {
  
  area: Area;
  items: Item[];
  searching: boolean;

  constructor(private nav: NavController, private navParams: NavParams,
              private orderService: OrderService) {
    this.area = navParams.get('area');
    this.items = orderService.getOpenOrdersItemsByArea(this.area);
    this.searching = false;
  }

}
