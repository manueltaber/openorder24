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
    category.ingredients = mockCategory['ingredients'];
    mockCategories.push(category);
  }
  return mockCategories;
}

var MOCKCATEGORIES = [
  { 'nr': 1, 'desc': 'Vorspeisen', 'icon': 'nutrition', 'optionals': [], 'ingredients': [] },
  { 'nr': 2, 'desc': 'Salate', 'icon': 'restaurant', 'optionals': [], 'ingredients': [] },
  { 'nr': 3, 'desc': 'Suppen', 'icon': 'cafe', 'optionals': [], 'ingredients': [] },
  { 'nr': 4, 'desc': 'Hauptspeisen', 'icon': 'restaurant', 'optionals': [], 'ingredients': [] },
  { 'nr': 5, 'desc': 'Fisch', 'icon': 'restaurant', 'optionals': [], 'ingredients': [] },
  { 'nr': 6, 'desc': 'Nachspeisen', 'icon': 'ice-cream', 'optionals': [], 'ingredients': [] },
  { 'nr': 8, 'desc': 'Getränke', 'icon': 'beer', 'optionals': ['Eiswürfel', 'Zitrone'], 'ingredients': [] },
  { 'nr': 10, 'desc': 'Pizza', 'icon': 'pizza', 'optionals': ['Vollkorn', 'Kamut', 'Glutenfrei', 'Knoblauchsauce'], 'ingredients': [] }
];
