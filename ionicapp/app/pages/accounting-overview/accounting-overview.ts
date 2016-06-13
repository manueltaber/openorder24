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
    let items = this.orderService.getOpenOrdersItemsByArea(this.area);
    for (let item of items) {
      let accountingItem = new AccountingItem();
      accountingItem.item = item;
      accountingItem.selected = false;
      this.accountingItems.push(accountingItem);
    }
    this.searching = false;
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
        amount = amount + accountingItem.item.price;
      }
    }
    return amount;
  }

  onCloseOrders(event) {
    let confirm = Alert.create({
      title: 'Achtung',
      message: 'Sicher?',
      buttons: [
        {
          text: 'Ja',
          handler: () => {
            //alert('Ja');
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
  item: Item;
  selected: boolean;
}
