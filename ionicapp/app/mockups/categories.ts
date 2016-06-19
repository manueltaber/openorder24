import {Category} from '../classes/category';

export {getMockCategories};

function getMockCategories(): Category[] {
  let mockCategories: Category[] = [];
  for (let mockCategory of MOCKCATEGORIES) {
    let category: Category = new Category();
    category.nr = mockCategory['nr'];
    category.desc = mockCategory['desc'];
    category.icon = mockCategory['icon'];
    mockCategories.push(category);
  }
  return mockCategories;
}

var MOCKCATEGORIES = [
  { 'nr': 1, 'desc': 'Vorspeißen', 'icon': 'restaurant' },
  { 'nr': 2, 'desc': 'Hauptspeißen', 'icon': 'restaurant' },
  { 'nr': 3, 'desc': 'Nachspeißen', 'icon': 'ice-cream' },
  { 'nr': 4, 'desc': 'Beilagen', 'icon': 'cafe' },
  { 'nr': 5, 'desc': 'Getränke', 'icon': 'beer' },
  { 'nr': 6, 'desc': 'Sonstige', 'icon': 'restaurant' },
  { 'nr': 7, 'desc': 'Pizza', 'icon': 'pizza' }
];
