import {Component} from '@angular/core';
import {NavController, NavParams, Alert} from 'ionic-angular';
import {Area} from '../../classes/area';
import {Item} from '../../classes/item';
import {Order} from '../../classes/order';
import {OrderService} from '../../services/order.service';
import {TranslationService} from '../../services/translation.service';

@Component({
  templateUrl: 'build/pages/accounting-overview/accounting-overview.html'
})
export class AccountingOverviewPage {
  
  area: Area;
  accountingItems: AccountingItem[] = [];
  searching: boolean;

  constructor(private nav: NavController, private navParams: NavParams,
              private orderService: OrderService,
              private translationService: TranslationService) {
    this.area = navParams.get('area');
    this.loadOpenAccountingItems();
    this.searching = false;
  }

  loadOpenAccountingItems() {
    this.accountingItems = [];
    let orders = this.orderService.getOpenOrdersByArea(this.area);
    for (let order of orders) {
      let accountingItem = new AccountingItem();
      accountingItem.order = order;
      accountingItem.selected = false;
      this.accountingItems.push(accountingItem);
    }
  }

  getSelectedItemCount() {
    let count: number = 0;
    for (let accountingItem of this.accountingItems) {
      if (accountingItem.selected) {
        count = count + 1;
      }
    }
    return count;
  }

  getSelectedItemAmount() {
    let amount: number = 0;
    for (let accountingItem of this.accountingItems) {
      if (accountingItem.selected) {
        amount = amount + accountingItem.order.item.price;
      }
    }
    return amount;
  }

  closeSelectedOrders() {
    for (let accountingItem of this.accountingItems) {
      if (accountingItem.selected) {
        this.orderService.closeOrder(accountingItem.order)
      }
    }
    this.loadOpenAccountingItems();
  }

  onBill(event) {
    let confirm = Alert.create({
      title: 'Achtung',
      message: 'Sicher?' + this.getSelectedItemAmount().toString(),
      buttons: [
        {
          text: 'Ja',
          handler: () => {
            this.closeSelectedOrders();
          }
        },
        {
          text: 'Nein',
          handler: () => {
            //alert('Nein');
          }
        }
      ]
    });
    this.nav.present(confirm);
  }
}

export class AccountingItem {
  order: Order;
  selected: boolean;
}
