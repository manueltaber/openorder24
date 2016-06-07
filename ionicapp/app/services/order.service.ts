import {Injectable} from '@angular/core';
import {Area} from '../classes/area';
import {Order} from '../classes/order'
import {Item} from '../classes/item'
import {ORDERS} from '../mockups/orders';
import {ItemService} from './item.service';

@Injectable()
export class OrderService {

  // orders that are already confirmed
  openOrders: Order[];
  // temporary orders that are not confirmed yet
  tempOrders: Order[];

  constructor(private itemService: ItemService) {
    this.openOrders = ORDERS;
    this.tempOrders = new Array<Order>();
  }
  
  getOpenOrders() {
    let orders: Order[] = this.openOrders;
    return orders;
  }
  
  getOpenOrdersByArea(area: Area) {
    let orders: Order[] = [];
    let order: Order;
    for (order of this.openOrders) {
      if (order.area_nr == area.nr) {
        orders.push(order);
      }
    }
    return orders;
  }

  getOpenOrdersAmount() {
    let sum: number = 0;
    let order: Order;
    for (order of this.openOrders) {
      let item = this.itemService.getItemByNr(order.item_nr);
      if (item) {
        sum = sum + item.price;
      }
    }
    return sum;
  }
  
  getOpenOrdersAmountByArea(area: Area) {
    let sum: number = 0;
    let order: Order;
    for (order of this.openOrders) {
      if (order.area_nr == area.nr) {
        let item = this.itemService.getItemByNr(order.item_nr);
        if (item) {
          sum = sum + item.price;
        }
      }
    }
    return sum;
  }
  
  // temp orders
  
  getTempOrdersByArea(area: Area) {
    let orders: Order[] = [];
    let order: Order;
    for (order of this.tempOrders) {
      if (order.area_nr == area.nr) {
        orders.push(order);
      }
    }
    return orders;
  }
  
  getTempOrdersAmountByArea(area: Area) {
    let sum: number = 0;
    let order: Order;
    for (order of this.tempOrders) {
      if (order.area_nr == area.nr) {
        let item = this.itemService.getItemByNr(order.item_nr);
        if (item) {
          sum = sum + item.price;
        }
      }
    }
    return sum;
  }
  
  addNewTempOrder(area: Area, item: Item) {
    let order = new Order();
    order.area_nr = area.nr;
    order.item_nr = item.nr;
    this.tempOrders.push(order);
  }
  
  confirmTempOrders() {
    this.openOrders.concat(this.tempOrders);
    this.tempOrders = [];
  }

}
