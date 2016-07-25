import {Category} from '../classes/category';
import {Extra, ExtraGroup} from '../classes/extra';
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
    // add ingredients
    item.ingredients = mockItem['ingredients'];
    // add optionals
    for (let mockOptional of mockItem.optionals) {
      let extra: Extra = new Extra();
      extra.desc = mockOptional['desc'];
      extra.price_diff_abs = mockOptional['price_diff_abs'];
      extra.price_diff_percent = mockOptional['price_diff_percent'];
      item.optionals.push(extra);
    }
    // add variants
    for (let mockVariantGroup of mockItem.variants) {
      let variantGroup: ExtraGroup = new ExtraGroup();
      variantGroup.desc = mockVariantGroup['desc'];
      for (let mockVariant of mockVariantGroup.extras) {
        let extra: Extra = new Extra();
        extra.desc = mockVariant['desc']
        extra.price_diff_abs = mockVariant['price_diff_abs'];
        extra.price_diff_percent = mockVariant['price_diff_percent'];
        variantGroup.extras.push(extra);
      }
      item.variants.push(variantGroup);
    }
    mockItems.push(item);
  }
  return mockItems;
}

var MOCKITEMS = [
  // Vorspeisen
  { 'nr': 1, 'desc': 'Gratinierte Zucchiniblüten', 'price': 12.5, 'category_nr': 1, 
    'ingredients': ['Zucchiniblüten', 'Büffelmozzarella', 'Stracchino'], 'optionals': [], 'variants': [] },
  { 'nr': 2, 'desc': 'Haustartar vom Rind', 'price': 13, 'category_nr': 1, 
    'ingredients': ['Haustartar', 'Toastbrot'], 'optionals': [], 'variants': [] },
  { 'nr': 3, 'desc': 'Südtiroler Vorspeisen-Teller', 'price': 12.5, 'category_nr': 1, 
    'ingredients': ['Speck', 'Kaminwurzen', 'Käse'], 'optionals': [], 'variants': [] },
  { 'nr': 4, 'desc': 'Vitello tonnato', 'price': 12.5, 'category_nr': 1, 
    'ingredients': ['Vitello tonnato', 'Baby-Spinat'], 'optionals': [], 'variants': [] },
  { 'nr': 5, 'desc': 'Passeirer Saiblingsfilet', 'price': 12.5, 'category_nr': 1, 
    'ingredients': ['Saiblingsfilet', 'Rhabarber'], 'optionals': [], 'variants': [] },
  { 'nr': 6, 'desc': 'Thunfischcarpaccio', 'price': 14.5, 'category_nr': 1,
    'ingredients': ['Thunfischcarpaccio', 'Apfel', 'Orange'], 'optionals': [], 'variants': [] },
  { 'nr': 7, 'desc': 'Oktopus-Tintenfischsalat', 'price': 13.5, 'category_nr': 1, 
    'ingredients': ['Oktopus', 'Artischocken'], 'optionals': [], 'variants': [] },
  { 'nr': 8, 'desc': 'Risotto mit Pfifferlingen', 'price': 12.5, 'category_nr': 1, 
    'ingredients': ['Risotto', 'Pfifferlinge'], 'optionals': [], 'variants': [] },
  { 'nr': 9, 'desc': 'Risotto mediterran', 'price': 13, 'category_nr': 1, 
    'ingredients': ['Risotto', 'Garnelen', 'Zucchini', 'Tomaten'], 'optionals': [], 'variants': [] },
  { 'nr': 10, 'desc': 'Crespelle nach Art des Hauses', 'price': 12, 'category_nr': 1, 
    'ingredients': ['Crespelle', 'Käse', 'Radicchio'], 'optionals': [], 'variants': [] },
  { 'nr': 12, 'desc': 'Ravioli mit Pfifferlingen', 'price': 13, 'category_nr': 1, 
    'ingredients': ['Ravioli', 'Pfifferlinge', 'Lagreinkäse'], 'optionals': [], 'variants': [] },
  { 'nr': 13, 'desc': 'Lasagne mit Wildgemüse und Burrata', 'price': 12.5, 'category_nr': 1, 
    'ingredients': ['Lasagne', 'Wildgemüse', 'Burrata'], 'optionals': [], 'variants': [] },
  { 'nr': 14, 'desc': 'Tagliolini mit Meeresfrüchten', 'price': 13.5, 'category_nr': 1, 
    'ingredients': ['Tagliolini', 'Meeresfrüchte'], 'optionals': [], 'variants': [] },
  { 'nr': 15, 'desc': 'Brennnessel-Tagliatelle', 'price': 12, 'category_nr': 1, 
    'ingredients': ['Tagliatelle', 'Rindsragout', 'Pilze'], 'optionals': [], 'variants': [] },
  { 'nr': 16, 'desc': 'Kurkuma-Teigtaschen', 'price': 13, 'category_nr': 1, 
    'ingredients': ['Teigtaschen', 'Spargel-Kichererbsenfüllung', 'Löwenzahnsauce'], 'optionals': [], 'variants': [] },
  // Salate
  { 'nr': 17, 'desc': 'Feine Blattsalate', 'price': 14, 'category_nr': 2, 
    'ingredients': ['Blattsalat', 'Büffelmozzarella', 'Rinderfiletstreifen', 'Garnelen'], 'optionals': [], 'variants': [] },
  { 'nr': 18, 'desc': 'Gemischter Salat', 'price': 5.5, 'category_nr': 2, 
    'ingredients': ['Salat', 'Balsamicodressing', 'Zitronendressing'], 'optionals': [], 'variants': [] },
  // Suppen
  { 'nr': 19, 'desc': 'Rindssuppe mit Kalbfleisch-Ravioli ', 'price': 7, 'category_nr': 3, 
    'ingredients': ['Rindssuppe', 'Ravioli'], 'optionals': [], 'variants': [] },
  { 'nr': 20, 'desc': 'Feines Erbsen-Minze-Zitronensüppchen', 'price': 8, 'category_nr': 3, 
    'ingredients': [], 'optionals': [], 'variants': [] },
  { 'nr': 21, 'desc': 'Japanische Misosuppe', 'price': 8, 'category_nr': 3, 
    'ingredients': [], 'optionals': [], 'variants': [] },
  // Hauptspeisen
  { 'nr': 22, 'desc': 'Medaillons vom Rinderfilet', 'price': 26, 'category_nr': 4, 
    'ingredients': ['Rinderfilet', 'Whiskey-Sauce', 'Gemüse-Caponata', 'Pilaf-Reis'], 'optionals': [], 'variants': [] },
  { 'nr': 23, 'desc': 'Tartar vom Rind', 'price': 20, 'category_nr': 4, 
    'ingredients': ['Tartar', 'Toastbrot'], 'optionals': [], 'variants': [] },
  { 'nr': 24, 'desc': 'Rinds-Rib Eye', 'price': 20, 'category_nr': 4, 
    'ingredients': ['Rib Eye', 'Gemüse', 'Püree'], 'optionals': [], 'variants': [] },
  { 'nr': 25, 'desc': 'Rinsdsschnitte mit Rotweinsauce', 'price': 23, 'category_nr': 4, 
    'ingredients': ['Rinsdsschnitte', 'Rotweinsauce', 'Gemüse-Caponata', 'Rosmarinkartoffeln'], 'optionals': [], 'variants': [] },
  { 'nr': 26, 'desc': 'Lammhüfte', 'price': 25, 'category_nr': 4, 
    'ingredients': ['Lammhüfte', 'Kicherebsenpüree', 'Butterschoten', 'Polenta'], 'optionals': [], 'variants': [] },
  { 'nr': 27, 'desc': 'Kalbsfilet mit grüner Pfeffersauce', 'price': 24, 'category_nr': 4, 
    'ingredients': ['Kalbsfilet', 'Pfeffersauce', 'Gemüse', 'Pilafreis'], 'optionals': [], 'variants': [] },
  { 'nr': 28, 'desc': 'Tomino-Käse', 'price': 17, 'category_nr': 4, 
    'ingredients': ['Tomino-Käse', 'Grillgemüse', 'Mostarda'], 'optionals': [], 'variants': [] },
  { 'nr': 29, 'desc': 'Kurkuma-Teigtaschen', 'price': 13, 'category_nr': 4, 
    'ingredients': ['Teigtaschen', 'Spargel-Kichererbsenfüllung', 'Löwenzahnsauce'], 'optionals': [], 'variants': [] },
  // Fisch
  { 'nr': 500, 'desc': 'Wolfsbarschfilet', 'price': 25, 'category_nr': 5, 
    'ingredients': ['Wolfsbarschfilet', 'Gemüse', 'Rosmarinkartoffeln'], 'optionals': [], 'variants': [] },
  { 'nr': 501, 'desc': 'Gegrillte Riesengarnelen', 'price': 23, 'category_nr': 5, 
    'ingredients': ['Riesengarnelen', 'Gemüse', 'Rosmarinkartoffeln'], 'optionals': [], 'variants': [] },
  // Steaks
  { 'nr': 600, 'desc': 'Rindsfilet (Black Angus ARG)', 'price': 25, 'category_nr': 6, 
    'ingredients': ['Rindsfilet', 'Beilagen'], 'optionals': [], 
    'variants': [
      {
        'desc': 'Größe',
        'extras': [
          { 'desc': '180g', 'price_diff_abs': 0, 'price_diff_percent': 0 },
          { 'desc': '250g', 'price_diff_abs': 4, 'price_diff_percent': 0 },
        ]
      },
    ]},
  { 'nr': 601, 'desc': 'Rindsfilet (Ocean Beef NZ)', 'price': 29, 'category_nr': 6, 
    'ingredients': ['Rindsfilet', 'Beilagen'], 'optionals': [], 
    'variants': [
      {
        'desc': 'Größe',
        'extras': [
          { 'desc': '180g', 'price_diff_abs': 0, 'price_diff_percent': 0 },
          { 'desc': '250g', 'price_diff_abs': 7, 'price_diff_percent': 0 },
        ]
      },
    ]},
  { 'nr': 602, 'desc': 'Entrecôte (Ocean Beef NZ) 300g', 'price': 26, 'category_nr': 6, 
    'ingredients': [], 'optionals': [], 'variants': []},
  { 'nr': 603, 'desc': 'Rib Eye (Ocean Beef NZ) 300g', 'price': 28, 'category_nr': 6, 
    'ingredients': [], 'optionals': [], 'variants': []},
  { 'nr': 604, 'desc': 'Rib Eye (Dry Aged Beef Südtirol) 500g', 'price': 36.5, 'category_nr': 6, 
    'ingredients': [], 'optionals': [], 'variants': []},
  { 'nr': 605, 'desc': 'T-Bone Steak (Black Angus USA) 1kg', 'price': 75, 'category_nr': 6, 
    'ingredients': [], 'optionals': [], 'variants': []},
  { 'nr': 606, 'desc': 'Porterhouse (Black Angus USA) 1kg', 'price': 80, 'category_nr': 6, 
    'ingredients': [], 'optionals': [], 'variants': []},
  // Desserts
  { 'nr': 32, 'desc': 'Eiskaffee', 'price': 5.5, 'category_nr': 7, 
    'ingredients': [], 'optionals': [], 'variants': [] },
  { 'nr': 33, 'desc': 'Eisschokolade', 'price': 5.5, 'category_nr': 7, 
    'ingredients': [], 'optionals': [], 'variants': [] },
  { 'nr': 34, 'desc': 'Hausgemachtes Tiramisu', 'price': 6.5, 'category_nr': 7, 
    'ingredients': [], 'optionals': [], 'variants': [] },
  { 'nr': 35, 'desc': 'Apfelstrudel', 'price': 6, 'category_nr': 7, 
    'ingredients': [], 'optionals': [], 'variants': [] },
  { 'nr': 36, 'desc': 'Schokoladentörtchen', 'price': 6, 'category_nr': 7, 
    'ingredients': [], 'optionals': [], 'variants': [] },
  { 'nr': 37, 'desc': 'Mangoparfait', 'price': 6, 'category_nr': 7, 
    'ingredients': [], 'optionals': [], 'variants': [] },

  /*{ 'nr': 12, 'desc': 'Kartoffel', 'price': 4.5, 'category_nr': 4, 'optionals': [], 'ingredients': [] },
  { 'nr': 13, 'desc': 'Pommes', 'price': 3.5, 'category_nr': 4, 'optionals': [], 'ingredients': [] },
  { 'nr': 14, 'desc': 'Salat', 'price': 3, 'category_nr': 4, 'optionals': [], 'ingredients': [] },*/

  { 'nr': 900, 'desc': 'Hofbräu Original', 'price': 2.8, 'category_nr': 9, 
    'ingredients': [], 'optionals': [], 
    'variants': [
      {
        'desc': 'Größe',
        'extras': [
          { 'desc': '0.3l', 'price_diff_abs': 0, 'price_diff_percent': 0 },
          { 'desc': '0.5l', 'price_diff_abs': 1.6, 'price_diff_percent': 0 },
          { 'desc': '1.0l', 'price_diff_abs': 5.6, 'price_diff_percent': 0 },
        ]
      },
    ] },
  { 'nr': 901, 'desc': 'Andechs Spezial Hell', 'price': 3, 'category_nr': 9, 
    'ingredients': [], 'optionals': [], 
    'variants': [
      {
        'desc': 'Größe',
        'extras': [
          { 'desc': '0.3l', 'price_diff_abs': 0, 'price_diff_percent': 0 },
          { 'desc': '0.5l', 'price_diff_abs': 1.7, 'price_diff_percent': 0 },
          { 'desc': '1.0l', 'price_diff_abs': 6, 'price_diff_percent': 0 },
        ]
      },
    ] },
  { 'nr': 902, 'desc': 'Andechs Weissbier', 'price': 3, 'category_nr': 9, 
    'ingredients': [], 'optionals': [], 
    'variants': [
      {
        'desc': 'Größe',
        'extras': [
          { 'desc': '0.3l', 'price_diff_abs': 0, 'price_diff_percent': 0 },
          { 'desc': '0.5l', 'price_diff_abs': 1.7, 'price_diff_percent': 0 },
        ]
      },
    ] },
  { 'nr': 903, 'desc': 'Distelhäuser Landbier', 'price': 3, 'category_nr': 9, 
    'ingredients': [], 'optionals': [], 
    'variants': [
      {
        'desc': 'Größe',
        'extras': [
          { 'desc': '0.3l', 'price_diff_abs': 0, 'price_diff_percent': 0 },
          { 'desc': '0.5l', 'price_diff_abs': 1.7, 'price_diff_percent': 0 },
        ]
      },
    ] },
  { 'nr': 904, 'desc': 'Distelhäuser Kellerbier', 'price': 3, 'category_nr': 9, 
    'ingredients': [], 'optionals': [], 
    'variants': [
      {
        'desc': 'Größe',
        'extras': [
          { 'desc': '0.3l', 'price_diff_abs': 0, 'price_diff_percent': 0 },
          { 'desc': '0.5l', 'price_diff_abs': 1.7, 'price_diff_percent': 0 },
        ]
      },
    ] },
  { 'nr': 905, 'desc': 'Rothaus Pils', 'price': 3, 'category_nr': 9, 
    'ingredients': [], 'optionals': [], 
    'variants': [
      {
        'desc': 'Größe',
        'extras': [
          { 'desc': '0.3l', 'price_diff_abs': 0, 'price_diff_percent': 0 },
          { 'desc': '0.5l', 'price_diff_abs': 1.7, 'price_diff_percent': 0 },
        ]
      },
    ] },
  { 'nr': 906, 'desc': 'Gaffel Kölsch', 'price': 3, 'category_nr': 9, 
    'ingredients': [], 'optionals': [], 
    'variants': [
      {
        'desc': 'Größe',
        'extras': [
          { 'desc': '0.3l', 'price_diff_abs': 0, 'price_diff_percent': 0 },
        ]
      },
    ] },
  { 'nr': 907, 'desc': 'Budweiser Budvar (0.33l Flasche)', 'price': 3, 'category_nr': 9, 
    'ingredients': [], 'optionals': [], 'variants': [] },
  { 'nr': 908, 'desc': 'Andechs Doppelbock dunkel (0.5l Flasche)', 'price': 5.4, 'category_nr': 9, 
    'ingredients': [], 'optionals': [], 'variants': [] },
  { 'nr': 909, 'desc': 'Krombacher alkoholfrei (0.33l Flasche)', 'price': 3, 'category_nr': 9, 
    'ingredients': [], 'optionals': [], 'variants': [] },
  { 'nr': 910, 'desc': 'Hefe Paulaner alkoholfrei (0.33l Flasche)', 'price': 3, 'category_nr': 9, 
    'ingredients': [], 'optionals': [], 'variants': [] },
  { 'nr': 911, 'desc': 'Bio Apfelsaft', 'price': 2, 'category_nr': 9, 
    'ingredients': [], 'optionals': [], 
    'variants': [
      {
        'desc': 'Größe',
        'extras': [
          { 'desc': '0.2l', 'price_diff_abs': 0, 'price_diff_percent': 0 },
          { 'desc': '0.5l', 'price_diff_abs': 2, 'price_diff_percent': 0 },
        ]
      },
    ] },
  { 'nr': 912, 'desc': 'Apfelschorle', 'price': 1.7, 'category_nr': 9, 
    'ingredients': [], 'optionals': [], 
    'variants': [
      {
        'desc': 'Größe',
        'extras': [
          { 'desc': '0.2l', 'price_diff_abs': 0, 'price_diff_percent': 0 },
          { 'desc': '0.5l', 'price_diff_abs': 1.5, 'price_diff_percent': 0 },
        ]
      },
    ] },
  { 'nr': 913, 'desc': 'Traubensaft', 'price': 2, 'category_nr': 9, 
    'ingredients': [], 'optionals': [], 
    'variants': [
      {
        'desc': 'Größe',
        'extras': [
          { 'desc': '0.2l', 'price_diff_abs': 0, 'price_diff_percent': 0 },
          { 'desc': '0.5l', 'price_diff_abs': 2, 'price_diff_percent': 0 },
        ]
      },
    ] },
  { 'nr': 914, 'desc': 'Eistee Pfirsich', 'price': 2, 'category_nr': 9, 
    'ingredients': [], 'optionals': [], 
    'variants': [
      {
        'desc': 'Größe',
        'extras': [
          { 'desc': '0.2l', 'price_diff_abs': 0, 'price_diff_percent': 0 },
          { 'desc': '0.5l', 'price_diff_abs': 2, 'price_diff_percent': 0 },
        ]
      },
    ] },
  { 'nr': 915, 'desc': 'Limonade', 'price': 2, 'category_nr': 9, 
    'ingredients': [], 'optionals': [], 
    'variants': [
      {
        'desc': 'Größe',
        'extras': [
          { 'desc': '0.2l', 'price_diff_abs': 0, 'price_diff_percent': 0 },
          { 'desc': '0.5l', 'price_diff_abs': 2, 'price_diff_percent': 0 },
        ]
      },
    ] },
  { 'nr': 916, 'desc': 'Coca-Cola', 'price': 2, 'category_nr': 9, 
    'ingredients': [], 'optionals': [], 
    'variants': [
      {
        'desc': 'Größe',
        'extras': [
          { 'desc': '0.2l', 'price_diff_abs': 0, 'price_diff_percent': 0 },
          { 'desc': '0.5l', 'price_diff_abs': 2, 'price_diff_percent': 0 },
        ]
      },
    ] },
  { 'nr': 917, 'desc': 'Coca-Cola Light', 'price': 2, 'category_nr': 9, 
    'ingredients': [], 'optionals': [], 
    'variants': [
      {
        'desc': 'Größe',
        'extras': [
          { 'desc': '0.2l', 'price_diff_abs': 0, 'price_diff_percent': 0 },
          { 'desc': '0.5l', 'price_diff_abs': 2, 'price_diff_percent': 0 },
        ]
      },
    ] },
  { 'nr': 918, 'desc': 'Meraner Mineralwasser prickelnd', 'price': 1.1, 'category_nr': 9, 
    'ingredients': [], 'optionals': [], 
    'variants': [
      {
        'desc': 'Größe',
        'extras': [
          { 'desc': '0.2l', 'price_diff_abs': 0, 'price_diff_percent': 0 },
          { 'desc': '0.5l', 'price_diff_abs': 1, 'price_diff_percent': 0 },
          { 'desc': '1.0l', 'price_diff_abs': 2.7, 'price_diff_percent': 0 },
        ]
      },
    ] },
  { 'nr': 919, 'desc': 'Meraner Mineralwasser still', 'price': 1.1, 'category_nr': 9, 
    'ingredients': [], 'optionals': [], 
    'variants': [
      {
        'desc': 'Größe',
        'extras': [
          { 'desc': '0.2l', 'price_diff_abs': 0, 'price_diff_percent': 0 },
          { 'desc': '0.5l', 'price_diff_abs': 1, 'price_diff_percent': 0 },
          { 'desc': '1.0l', 'price_diff_abs': 2.7, 'price_diff_percent': 0 },
        ]
      },
    ] },
  { 'nr': 920, 'desc': 'Espresso', 'price': 1.3, 'category_nr': 9, 
    'ingredients': [], 'optionals': [], 'variants': [] },
  { 'nr': 921, 'desc': 'Cappuccino', 'price': 2, 'category_nr': 9, 
    'ingredients': [], 'optionals': [], 'variants': [] },
  { 'nr': 44, 'desc': 'Margherita', 'price': 5.5, 'category_nr': 10, 
    'ingredients': ['Tomatensauce', 'Mozzarella', 'Origano'], 'optionals': [], 'variants': [] },
  { 'nr': 45, 'desc': 'Scharfe Salami', 'price': 6.5, 'category_nr': 10, 
    'ingredients': ['Tomatensauce', 'Mozzarella', 'Origano', 'Salami'], 'optionals': [], 'variants': [] },
  { 'nr': 46, 'desc': 'Thunfisch-Zwiebel', 'price': 7.5, 'category_nr': 10, 
    'ingredients': ['Tomatensauce', 'Mozzarella', 'Origano', 'Thunfisch', 'Zwiebel'], 'optionals': [], 'variants': [] },
  { 'nr': 47, 'desc': 'Schinken-Pilze', 'price': 7.5, 'category_nr': 10, 
    'ingredients': ['Tomatensauce', 'Mozzarella', 'Origano', 'Schinken', 'Champignons'], 'optionals': [], 'variants': [] },
  { 'nr': 48, 'desc': 'Capricciosa', 'price': 8, 'category_nr': 10, 
    'ingredients': ['Tomatensauce', 'Mozzarella', 'Origano', 'Schinken', 'Champignons', 'Artischoken', 'Oliven'], 'optionals': [], 'variants': [] },
  { 'nr': 49, 'desc': 'Schinken', 'price': 6.5, 'category_nr': 10, 
    'ingredients': ['Tomatensauce', 'Mozzarella', 'Origano', 'Schinken'], 'optionals': [], 'variants': [] },
  { 'nr': 50, 'desc': 'Gemüse', 'price': 8, 'category_nr': 10, 
    'ingredients': ['Tomatensauce', 'Mozzarella', 'Origano', 'Parmesan', 'Zucchini', 'Grüne Bohnen', 'Melanzane', 'Spargel', 'Gegrillte Peperoni', 'Mais'], 'optionals': [], 'variants': [] },
  { 'nr': 51, 'desc': 'Thunfisch', 'price': 7, 'category_nr': 10, 
    'ingredients': ['Tomatensauce', 'Mozzarella', 'Origano', 'Thunfisch'], 'optionals': [], 'variants': [] },
  { 'nr': 52, 'desc': 'Teufel', 'price': 8, 'category_nr': 10, 
    'ingredients': ['Tomatensauce', 'Mozzarella', 'Origano', 'Scharfe Salami', 'Peperonata', 'Peperoni Lombardi', 'Oliven'], 'optionals': [], 'variants': [] },
  { 'nr': 53, 'desc': 'Vier Käse', 'price': 7.5, 'category_nr': 10, 
    'ingredients': ['Tomatensauce', 'Mozzarella', 'Origano', 'Edamer / Fontal', 'Gorgonzola'], 'optionals': [], 'variants': [] },
  { 'nr': 54, 'desc': 'Arrabiata', 'price': 7.5, 'category_nr': 10, 
    'ingredients': ['Tomatensauce', 'Mozzarella', 'Scharfe Salami', 'Knoblauch', 'Parmesan'], 'optionals': [], 'variants': [] },
  { 'nr': 55, 'desc': 'Mais', 'price': 6.5, 'category_nr': 10, 
    'ingredients': ['Tomatensauce', 'Mozzarella', 'Origano', 'Mais'], 'optionals': [], 'variants': [] },
];