import {Injectable} from '@angular/core';
import {Category} from '../classes/category';
import {Item} from '../classes/item';
import {ITEMS} from '../mockups/items';

@Injectable()
export class ItemService {

  constructor() {}
  
  getItems(category: Category) {
    //return Promise.resolve(ITEMS);
    let res_items = [];
    let item: Item;
    for (item of ITEMS) {
      if (item.category_nr == category.nr) {
        res_items.push(item);
      }
    }
    return res_items;
  }
  
  getItem(nr: number) {
    return Promise.resolve(ITEMS)
      .then(items => items.filter(i => i.nr === +nr)[0]);
  }

}
