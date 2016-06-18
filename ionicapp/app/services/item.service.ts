import {Injectable} from '@angular/core';
import {Category} from '../classes/category';
import {Item} from '../classes/item';
import {getMockItems} from '../mockups/items';

@Injectable()
export class ItemService {

  items: Item[];

  constructor() {
    this.items = getMockItems();
  }
  
  getItemsByCategory(category: Category) {
    let items = [];
    let item: Item;
    for (item of this.items) {
      if (item.category.nr == category.nr) {
        items.push(item);
      }
    }
    return items;
  }
  
  getItemByNr(nr: number) {
    let item: Item;
    for (item of this.items) {
      if (item.nr == nr) {
        return item;
      }
    }
  }

}
