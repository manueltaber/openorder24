import {Category} from '../classes/category';

export {getMockCategories};

function getMockCategories(): Category[] {
  let mockCategories: Category[] = [];
  for (let mockCategory of MOCKCATEGORIES) {
    let category: Category = new Category();
    category.nr = mockCategory['nr'];
    category.desc = mockCategory['desc'];
    category.icon = mockCategory['icon'];
    category.optionals = mockCategory['optionals'];
    mockCategories.push(category);
  }
  return mockCategories;
}

var MOCKCATEGORIES = [
  { 'nr': 1, 'desc': 'Vorspeißen', 'icon': 'restaurant', 'optionals': [] },
  { 'nr': 2, 'desc': 'Hauptspeißen', 'icon': 'restaurant', 'optionals': [] },
  { 'nr': 3, 'desc': 'Nachspeißen', 'icon': 'ice-cream', 'optionals': [] },
  { 'nr': 4, 'desc': 'Beilagen', 'icon': 'cafe', 'optionals': [] },
  { 'nr': 5, 'desc': 'Getränke', 'icon': 'beer', 
    'optionals': ['Eiswürfel', 'Zitrone'] },
  { 'nr': 6, 'desc': 'Sonstige', 'icon': 'restaurant', 'optionals': [] },
  { 'nr': 7, 'desc': 'Pizza', 'icon': 'pizza', 
    'optionals': ['Knoblauchsauce', 'Vollkorn'] }
];
