import {Injectable} from '@angular/core';
import {Area} from '../classes/area';
import {Order} from '../classes/order'
import {Item} from '../classes/item'
import {getMockOrders} from '../mockups/orders';
import {ItemService} from './item.service';

@Injectable()
export class OrderService {

  // orders that are already confirmed
  openOrders: Order[];
  // temporary orders that are not confirmed yet
  tempOrders: Order[];

  constructor(private itemService: ItemService) {
    this.openOrders = getMockOrders();
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
      if (order.area.nr == area.nr) {
        orders.push(order);
      }
    }
    return orders;
  }

  getOpenOrdersCount(): number {
    return this.openOrders.length;
  }

  getOpenOrdersCountByArea(area: Area): number {
    let count: number = 0;
    for (let order of this.openOrders) {
      if (order.area.nr == area.nr) {
        count = count + 1;
      }
    }
    return count;
  }

  getOpenOrdersAmount() {
    let sum: number = 0;
    for (let order of this.openOrders) {
      sum = sum + order.item.price;
    }
    return sum;
  }

  getOpenOrdersAmountByArea(area: Area) {
    let sum: number = 0;
    for (let order of this.openOrders) {
      if (order.area.nr == area.nr) {
        sum = sum + order.item.price;
      }
    }
    return sum;
  }

  /*getOpenOrdersItems() {
    let items: Item[] = [];
    for (let order of this.openOrders) {
      if (order.item) {
        items.push(order.item);
      }
    }
    return items;
  }

  getOpenOrdersItemsByArea(area: Area) {
    let items: Item[] = [];
    for (let order of this.openOrders) {
      if (order.area.nr == area.nr) {
        if (order.item) {
          items.push(order.item);
        }
      }
    }
    return items;
  }*/
  
  // temp orders
  
  getTempOrdersByArea(area: Area) {
    let orders: Order[] = [];
    for (let order of this.tempOrders) {
      if (order.area.nr == area.nr) {
        orders.push(order);
      }
    }
    return orders;
  }
  
  getTempOrdersAmountByArea(area: Area) {
    let sum: number = 0;
    let order: Order;
    for (order of this.tempOrders) {
      if (order.area.nr == area.nr) {
        sum = sum + order.item.price;
      }
    }
    return sum;
  }
  
  addNewTempOrder(area: Area, item: Item) {
    let order = new Order();
    order.area = area;
    order.item = item;
    this.tempOrders.push(order);
  }
  
  confirmTempOrders() {
    this.openOrders = this.openOrders.concat(this.tempOrders);
    this.tempOrders = [];
  }

  cancelTempOrders() {
    this.tempOrders = [];
  }

  closeOrder(order: Order): boolean {
    let res: boolean = false;
    let index = this.openOrders.indexOf(order, 0);
    if (index > -1) {
      this.openOrders.splice(index, 1)
      res = true;
    }
    return res;
  }

}
