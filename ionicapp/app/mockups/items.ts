import {Category} from '../classes/category';
import {Item} from '../classes/item';
import {getMockCategories} from './categories';

export {getMockItems};

function getMockItems(): Item[] {
  let mockCategories = getMockCategories();
  let mockItems: Item[] = [];
  for (let mockItem of MOCKITEMS) {
    let item = new Item();
    item.nr = mockItem['nr'];
    item.desc = mockItem['desc'];
    item.price = mockItem['price'];
    for (let category of mockCategories) {
      if (category.nr == mockItem['category_nr']) {
        item.category = category;
      }
    }
    item.optionals = mockItem['optionals'];
    item.ingredients = mockItem['ingredients'];
    mockItems.push(item);
  }
  return mockItems;
}

var MOCKITEMS = [
  { 'nr': 1, 'desc': 'Nudel', 'price': 8, 'category_nr': 1, 'optionals': [], 'ingredients': [] },
  { 'nr': 2, 'desc': 'Suppe', 'price': 5, 'category_nr': 1, 'optionals': [], 'ingredients': [] },
  { 'nr': 3, 'desc': 'Reis', 'price': 6, 'category_nr': 1, 'optionals': [], 'ingredients': [] },
  { 'nr': 4, 'desc': 'Lasagne', 'price': 7.5, 'category_nr': 1, 'optionals': [], 'ingredients': [] },
  { 'nr': 5, 'desc': 'Knödel', 'price': 6.2, 'category_nr': 1, 'optionals': [], 'ingredients': [] },

  { 'nr': 6, 'desc': 'Fleisch', 'price': 12.5, 'category_nr': 2, 'optionals': [], 'ingredients': [] },
  { 'nr': 7, 'desc': 'Fisch', 'price': 21, 'category_nr': 2, 'optionals': [], 'ingredients': [] },
  { 'nr': 8, 'desc': 'Wienerschnitzel', 'price': 12, 'category_nr': 2, 'optionals': [], 'ingredients': [] },

  { 'nr': 9, 'desc': 'Kuchen', 'price': 4.5, 'category_nr': 3, 'optionals': [], 'ingredients': [] },
  { 'nr': 10, 'desc': 'Eis', 'price': 5, 'category_nr': 3, 'optionals': [], 'ingredients': [] },
  { 'nr': 11, 'desc': 'Strudel', 'price': 6, 'category_nr': 3, 'optionals': [], 'ingredients': [] },

  { 'nr': 12, 'desc': 'Kartoffel', 'price': 4.5, 'category_nr': 4, 'optionals': [], 'ingredients': [] },
  { 'nr': 13, 'desc': 'Pommes', 'price': 3.5, 'category_nr': 4, 'optionals': [], 'ingredients': [] },
  { 'nr': 14, 'desc': 'Salat', 'price': 3, 'category_nr': 4, 'optionals': [], 'ingredients': [] },

  { 'nr': 15, 'desc': 'Bier', 'price': 3.5, 'category_nr': 5, 'optionals': [], 'ingredients': [] },
  { 'nr': 16, 'desc': 'Hefe', 'price': 5, 'category_nr': 5, 'optionals': [], 'ingredients': [] },
  { 'nr': 17, 'desc': 'Wein', 'price': 4.5, 'category_nr': 5, 'optionals': [], 'ingredients': [] },
  { 'nr': 18, 'desc': 'Saft', 'price': 3, 'category_nr': 5, 'optionals': [], 'ingredients': [] },
  { 'nr': 19, 'desc': 'Cola', 'price': 3, 'category_nr': 5, 'optionals': [], 'ingredients': [] },
  { 'nr': 20, 'desc': 'Wasser', 'price': 2.5, 'category_nr': 5, 'optionals': [], 'ingredients': [] },

  { 'nr': 21, 'desc': 'Chips', 'price': 2.5, 'category_nr': 6, 'optionals': [], 'ingredients': [] },

  { 'nr': 22, 'desc': 'Margherita', 'price': 5.5, 'category_nr': 7, 'optionals': [], 
    'ingredients': ['Tomaten', 'Mozarella', 'Oregano'] },
  { 'nr': 23, 'desc': 'Tonno', 'price': 7.5, 'category_nr': 7, 'optionals': [], 
    'ingredients': ['Tomaten', 'Mozarella', 'Oregano', 'Tonno'] },
  { 'nr': 24, 'desc': 'Schinken/Pilze', 'price': 8, 'category_nr': 7, 'optionals': [], 
    'ingredients': ['Tomaten', 'Mozarella', 'Oregano', 'Schinken', 'Pilze'] },
  { 'nr': 25, 'desc': 'Tirol', 'price': 8.5, 'category_nr': 7, 'optionals': [], 
    'ingredients': ['Tomaten', 'Mozarella', 'Oregano', 'Pilze', 'Speck'] },
  { 'nr': 26, 'desc': 'Salami', 'price': 7, 'category_nr': 7, 'optionals': [], 
    'ingredients': ['Tomaten', 'Mozarella', 'Oregano', 'Salami'] },
  { 'nr': 27, 'desc': 'Calzone', 'price': 7.5, 'category_nr': 7, 'optionals': [], 
    'ingredients': ['Tomaten', 'Mozarella', 'Oregano', 'Topfen'] },
];