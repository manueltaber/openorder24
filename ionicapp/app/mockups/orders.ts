import {Area} from '../classes/area';
import {Item} from '../classes/item';
import {Order} from '../classes/order';
import {getMockAreas} from './areas';
import {getMockItems} from './items';

export {getMockOrders};

function getMockOrders(): Order[] {
  let mockAreas = getMockAreas();
  let mockItems = getMockItems();
  let mockOrders: Order[] = [];
  for (let mockOrder of MOCKORDERS) {
    let order = new Order();
    for (let area of mockAreas) {
      if (area.nr == mockOrder['area_nr']) {
        order.area = area;
      }
    }
    for (let item of mockItems) {
      if (item.nr == mockOrder['item_nr']) {
        order.item = item;
      }
    }
    order.count = mockOrder['nr'];
    order.desc = mockOrder['desc'];
    mockOrders.push(order);
  }
  return mockOrders;
}

var MOCKORDERS = [
  { 'area_nr': 2, 'item_nr': 1, 'count': 1, 'desc': '' },
  { 'area_nr': 2, 'item_nr': 2, 'count': 1, 'desc': '' },

  { 'area_nr': 3, 'item_nr': 4, 'count': 1, 'desc': '' },
  { 'area_nr': 3, 'item_nr': 5, 'count': 1, 'desc': '' },
  { 'area_nr': 3, 'item_nr': 6, 'count': 1, 'desc': '' },
  { 'area_nr': 3, 'item_nr': 7, 'count': 1, 'desc': '' },
  { 'area_nr': 3, 'item_nr': 8, 'count': 1, 'desc': '' },
  { 'area_nr': 3, 'item_nr': 9, 'count': 1, 'desc': '' },

  { 'area_nr': 5, 'item_nr': 1, 'count': 1, 'desc': '' },
  { 'area_nr': 5, 'item_nr': 2, 'count': 1, 'desc': '' },
  { 'area_nr': 5, 'item_nr': 3, 'count': 1, 'desc': '' },
];