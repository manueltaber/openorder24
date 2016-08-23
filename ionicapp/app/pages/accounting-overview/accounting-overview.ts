import {Component} from '@angular/core';
import {NavController, NavParams, AlertController} from 'ionic-angular';

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

  constructor(private nav: NavController, private navParams: NavParams, private alertController: AlertController,
              private orderService: OrderService, private translationService: TranslationService) {
    this.area = navParams.get('area');
    this.loadOpenAccountingItems();
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

  getSelectableItemCount() {
    return this.accountingItems.length;
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

  getOverallItemAmount() {
    let amount: number = 0;
    for (let accountingItem of this.accountingItems) {
      amount = amount + accountingItem.order.item.price;
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

  closeAllOrders() {
    for (let accountingItem of this.accountingItems) {
      this.orderService.closeOrder(accountingItem.order)
    }
    this.loadOpenAccountingItems();
  }

  onBill(event) {
    let confirm = this.alertController.create({
      title: this.getSelectedItemAmount().toString() + '€',
      message: 'Soll der Betrag abgebucht werden?',
      buttons: [
        { text: this.translationService.getTranslation('YES'),
          handler: () => { this.closeSelectedOrders(); }
        },
        { text: this.translationService.getTranslation('NO') }
      ]
    });
    confirm.present();
  }

  onBillAll(event) {
    let confirm = this.alertController.create({
      title: this.getOverallItemAmount().toString() + '€',
      message: 'Soll der Gesamtbetrag abgebucht werden?',
      buttons: [
        { text: this.translationService.getTranslation('YES'),
          handler: () => { this.closeAllOrders(); }
        },
        { text: this.translationService.getTranslation('NO') }
      ]
    });
    confirm.present();
  }
}

export class AccountingItem {
  order: Order;
  selected: boolean;
}
