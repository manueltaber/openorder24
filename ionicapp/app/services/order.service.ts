import {Injectable} from '@angular/core';
import {Area} from '../classes/area';
import {Order} from '../classes/order'
import {ORDERS} from '../mockups/orders';

@Injectable()
export class OrderService {

  constructor() {}
  
  getOpenOrders() {
    //return Promise.resolve(AREAS);
    return ORDERS;
  }
  
  getOpenOrdersByArea(area: Area) {
    let res_orders = [];
    let order: Order;
    for (order of ORDERS) {
      if (order.area_nr == area.nr) {
        res_orders.push(order);
      }
    }
    return res_orders;
  }
  
  
}
