import {Category} from '../classes/category';
import {Extra, ExtraGroup} from '../classes/extra';

export {getMockCategories};

function getMockCategories(): Category[] {
  let mockCategories: Category[] = [];
  for (let mockCategory of MOCKCATEGORIES) {
    let category: Category = new Category();
    category.nr = mockCategory['nr'];
    category.desc = mockCategory['desc'];
    category.icon = mockCategory['icon'];
    // add ingredients
    category.ingredients = mockCategory['ingredients'];
    // add optionals
    for (let mockOptional of mockCategory.optionals) {
      let extra: Extra = new Extra();
      extra.desc = mockOptional['desc'];
      extra.price_diff_abs = mockOptional['price_diff_abs'];
      extra.price_diff_percent = mockOptional['price_diff_percent'];
      extra.default = mockOptional['default'];
      category.optionals.push(extra);
    }
    // add variants
    for (let mockVariantGroup of mockCategory.variants) {
      let variantGroup: ExtraGroup = new ExtraGroup();
      variantGroup.desc = mockVariantGroup['desc'];
      for (let mockVariant of mockVariantGroup.extras) {
        let extra: Extra = new Extra();
        extra.desc = mockVariant['desc']
        extra.price_diff_abs = mockVariant['price_diff_abs'];
        extra.price_diff_percent = mockVariant['price_diff_percent'];
        extra.default = mockVariant['default'];
        variantGroup.extras.push(extra);
      }
      category.variants.push(variantGroup);
    }
    mockCategories.push(category);
  }
  return mockCategories;
}

var MOCKCATEGORIES = [
  { 'nr': 1,  'desc': 'Vorspeisen', 'icon': 'restaurant',
    'ingredients': [], 'optionals': [
      { 'desc': 'Als Hauptspeiße', 'price_diff_abs': 2, 'price_diff_percent': 0 },
    ], 'variants': []},

  { 'nr': 2,  'desc': 'Salate', 'icon': 'nutrition',
    'ingredients': [],
    'optionals': [
      { 'desc': 'Essig', 'price_diff_abs': 0, 'price_diff_percent': 0, 'default': false },
      { 'desc': 'Olivenöl', 'price_diff_abs': 0, 'price_diff_percent': 0, 'default': false },
    ],
    'variants': []},

  { 'nr': 3,  'desc': 'Suppen', 'icon': 'cafe',
    'ingredients': [], 'optionals': [], 'variants': []},

  { 'nr': 4,  'desc': 'Hauptspeisen', 'icon': 'restaurant',
    'ingredients': [], 'optionals': [], 'variants': []},

  { 'nr': 5,  'desc': 'Fisch', 'icon': 'restaurant',
    'ingredients': [], 'optionals': [], 'variants': []},

  { 'nr': 6,  'desc': 'Steaks', 'icon': 'restaurant',
    'ingredients': [], 'optionals': [], 
    'variants': [
      {
        'desc': 'Garstufe',
        'extras': [
          { 'desc': 'Rare', 'price_diff_abs': 0, 'price_diff_percent': 0, 'default': false },
          { 'desc': 'Medium', 'price_diff_abs': 0, 'price_diff_percent': 0, 'default': true },
          { 'desc': 'Well done', 'price_diff_abs': 0, 'price_diff_percent': 0, 'default': false },
        ]
      },
    ]
  },

  { 'nr': 7,  'desc': 'Desserts', 'icon': 'ice-cream',
    'ingredients': [], 'optionals': [], 'variants': []},

  { 'nr': 8,  'desc': 'Beilagen', 'icon': 'restaurant',
    'ingredients': [], 'optionals': [], 'variants': []},

  { 'nr': 9,  'desc': 'Getränke', 'icon': 'beer',
    'ingredients': [], 
    'optionals': [
      { 'desc': 'Eiswürfel', 'price_diff_abs': 0, 'price_diff_percent': 0, 'default': false },
      { 'desc': 'Zitrone', 'price_diff_abs': 0, 'price_diff_percent': 0, 'default': false },
    ], 
    'variants': []},

  { 'nr': 10, 'desc': 'Pizza', 'icon': 'pizza',
    'ingredients': [],
    'optionals': [
      { 'desc': 'Knoblauchsauce', 'price_diff_abs': 3.5, 'price_diff_percent': 0, 'default': false },
      { 'desc': 'Scharfes Öl', 'price_diff_abs': 0, 'price_diff_percent': 0, 'default': false },
    ],
    'variants': [
      {
        'desc': 'Größe',
        'extras': [
          { 'desc': 'Normal', 'price_diff_abs': 0, 'price_diff_percent': 0, 'default': true },
          { 'desc': 'Klein', 'price_diff_abs': -2, 'price_diff_percent': 0, 'default': false },
        ]
      },
      {
        'desc': 'Teig',
        'extras': [
          { 'desc': 'Normal', 'price_diff_abs': 0, 'price_diff_percent': 0, 'default': true },
          { 'desc': 'Vollkorn', 'price_diff_abs': 2, 'price_diff_percent': 0, 'default': false },
          { 'desc': 'Glutenfrei', 'price_diff_abs': 3, 'price_diff_percent': 0, 'default': false },
        ]
      },
    ]
  }
];
