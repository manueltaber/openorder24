import {Category} from '../classes/category';
import {Extra} from '../classes/extra';

export {getMockCategories};

function getMockCategories(): Category[] {
  let mockCategories: Category[] = [];
  for (let mockCategory of MOCKCATEGORIES) {
    let category: Category = new Category();
    category.nr = mockCategory['nr'];
    category.desc = mockCategory['desc'];
    category.icon = mockCategory['icon'];
    category.ingredients = mockCategory['ingredients'];
    for (let mockOptional of mockCategory.optionals) {
      let extra: Extra = new Extra();
      extra.desc = mockOptional['desc'];
      extra.price_diff_abs = mockOptional['price_diff_abs'];
      extra.price_diff_percent = mockOptional['price_diff_percent'];
      category.optionals.push(extra);
    }
    for (let mockVariants of mockCategory.variants) {
      let variantGroup: Extra[] = [];
      for (let mockVariant of mockVariants) {
        let extra: Extra = new Extra();
        extra.desc = mockVariant['desc']
        extra.price_diff_abs = mockVariant['price_diff_abs'];
        extra.price_diff_percent = mockVariant['price_diff_percent'];
        variantGroup.push(extra);
      }
      category.variants.push(variantGroup);
    }
    mockCategories.push(category);
  }
  return mockCategories;
}

var MOCKCATEGORIES = [
  { 'nr': 1,  'desc': 'Vorspeisen', 'icon': 'restaurant',
    'ingredients': [], 'optionals': [], 'variants': []},

  { 'nr': 2,  'desc': 'Salate', 'icon': 'nutrition',
    'ingredients': [],
    'optionals': [
      { 'desc': 'Essig', 'price_diff_abs': 0, 'price_diff_percent': 0 },
      { 'desc': 'Olivenöl', 'price_diff_abs': 0, 'price_diff_percent': 0 },
    ],
    'variants': []},

  { 'nr': 3,  'desc': 'Suppen', 'icon': 'cafe',
    'ingredients': [], 'optionals': [], 'variants': []},

  { 'nr': 4,  'desc': 'Hauptspeisen', 'icon': 'restaurant',
    'ingredients': [], 'optionals': [], 'variants': []},

  { 'nr': 5,  'desc': 'Fisch', 'icon': 'restaurant',
    'ingredients': [], 'optionals': [], 'variants': []},

  { 'nr': 6,  'desc': 'Nachspeisen', 'icon': 'ice-cream',
    'ingredients': [], 'optionals': [], 'variants': []},

  { 'nr': 8,  'desc': 'Getränke', 'icon': 'beer',
    'ingredients': [], 
    'optionals': [
      { 'desc': 'Eiswürfel', 'price_diff_abs': 0, 'price_diff_percent': 0 },
      { 'desc': 'Zitrone', 'price_diff_abs': 0, 'price_diff_percent': 0 },
    ], 
    'variants': []},

  { 'nr': 10, 'desc': 'Pizza', 'icon': 'pizza',
    'ingredients': [],
    'optionals': [
      { 'desc': 'Knoblauchsauce', 'price_diff_abs': 3.5, 'price_diff_percent': 0 },
      { 'desc': 'Scharfes Öl', 'price_diff_abs': 0, 'price_diff_percent': 0 },
    ],
    'variants': [
      [
        { 'desc': 'Klein', 'price_diff_abs': -2, 'price_diff_percent': 0 },
        { 'desc': 'Normal', 'price_diff_abs': 0, 'price_diff_percent': 0 },
      ],
      [
        { 'desc': 'Normal', 'price_diff_abs': 0, 'price_diff_percent': 0 }, 
        { 'desc': 'Vollkorn', 'price_diff_abs': 2, 'price_diff_percent': 0 }, 
        { 'desc': 'Kamut', 'price_diff_abs': 3, 'price_diff_percent': 0 },
        { 'desc': 'Glutenfrei', 'price_diff_abs': 3, 'price_diff_percent': 0 },
      ]
    ]
  }
];
