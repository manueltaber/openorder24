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
  // Vorspeisen
  { 'nr': 1, 'desc': 'Gratinierte Zucchiniblüten mit Büffelmozzarella und Stracchino gefüllt', 'price': 12.5, 'category_nr': 1, 'optionals': [], 'ingredients': ['Zucchiniblüten', 'Büffelmozzarella', 'Stracchino'] },
  { 'nr': 2, 'desc': 'Haustartar vom Rind, serviert mit knusprigem Toastbrot', 'price': 13, 'category_nr': 1, 'optionals': [], 'ingredients': ['Haustartar', 'Toastbrot'] },
  { 'nr': 3, 'desc': 'Südtiroler Vorspeisen-Teller mit Speck, Kaminwurzen und Käse', 'price': 12.5, 'category_nr': 1, 'optionals': [], 'ingredients': ['Speck', 'Kaminwurzen', 'Käse'] },
  { 'nr': 4, 'desc': 'Vitello tonnato mit Salat von Baby-Spinat', 'price': 12.5, 'category_nr': 1, 'optionals': [], 'ingredients': ['Vitello tonnato', 'Salat'] },
  { 'nr': 5, 'desc': 'Leicht geräuchertes Passeirer Saiblingsfilet mit süß-saurem Rhabarber', 'price': 12.5, 'category_nr': 1, 'optionals': [], 'ingredients': ['Saiblingsfilet', 'Rhabarber'] },
  { 'nr': 6, 'desc': 'Thunfischcarpaccio mit Salat von Apfel und Orange', 'price': 14.5, 'category_nr': 1, 'optionals': [], 'ingredients': ['Thunfischcarpaccio', 'Apfel', 'Orange'] },
  { 'nr': 7, 'desc': 'Lauwarmer Oktopus-Tintenfischsalat mit Artischocken', 'price': 13.5, 'category_nr': 1, 'optionals': [], 'ingredients': ['Oktopus', 'Artischocken'] },
  { 'nr': 8, 'desc': 'Leicht geräuchertes Passeirer Saiblingsfilet mit süß-saurem Rhabarber', 'price': 12.5, 'category_nr': 1, 'optionals': [], 'ingredients': ['Saiblingsfilet', 'Rhabarber'] },
  { 'nr': 9, 'desc': 'Risotto mit Pfifferlingen', 'price': 12.5, 'category_nr': 1, 'optionals': [], 'ingredients': ['Risotto', 'Pfifferlinge'] },
  { 'nr': 10, 'desc': 'Risotto mediterran | dreierlei Reissorten mit Garnelen, Zucchini und Tomaten', 'price': 13, 'category_nr': 1, 'optionals': [], 'ingredients': ['Risotto', 'Garnelen', 'Zucchini', 'Tomaten'] },
  { 'nr': 11, 'desc': 'Mit Käse überbackene Crespelle mit Radicchio, nach Art des Hauses', 'price': 12, 'category_nr': 1, 'optionals': [], 'ingredients': ['Crespelle', 'Käse', 'Radicchio'] },
  { 'nr': 12, 'desc': 'Ravioli mit Pfifferlingen und Lagreinkäse gefüllt', 'price': 13, 'category_nr': 1, 'optionals': [], 'ingredients': ['Ravioli', 'Pfifferlinge', 'Lagreinkäse'] },
  { 'nr': 13, 'desc': 'Lasagne mit Wildgemüse und Burrata', 'price': 12.5, 'category_nr': 1, 'optionals': [], 'ingredients': ['Lasagne', 'Wildgemüse', 'Burrata'] },
  { 'nr': 14, 'desc': 'Tagliolini schwarz-weiß mit Meeresfrüchten, leicht pikant', 'price': 13.5, 'category_nr': 1, 'optionals': [], 'ingredients': ['Tagliolini', 'Meeresfrüchte'] },
  { 'nr': 15, 'desc': 'Brennnessel-Tagliatelle mit Rindsragout „Black Angus“ und Pilzen', 'price': 12, 'category_nr': 1, 'optionals': [], 'ingredients': ['Tagliatelle', 'Rindsragout', 'Pilze'] },
  { 'nr': 16, 'desc': 'Kurkuma-Teigtaschen mit Spargel-Kichererbsenfüllung und Löwenzahnsauce', 'price': 13, 'category_nr': 1, 'optionals': [], 'ingredients': ['Teigtaschen', 'Spargel-Kichererbsenfüllung', 'Löwenzahnsauce'] },
  // Salate
  { 'nr': 17, 'desc': 'Feine Blattsalate mit Büffelmozzarella und gebratenen Rinderfiletstreifen oder Garnelen', 'price': 14, 'category_nr': 2, 'optionals': [], 'ingredients': ['Blattsalat', 'Büffelmozzarella', 'Rinderfiletstreifen', 'Garnelen'] },
  { 'nr': 18, 'desc': 'Gemischter Salat mit Balsamico- oder Zitronendressing ', 'price': 5.5, 'category_nr': 2, 'optionals': [], 'ingredients': ['Salat', 'Balsamicodressing', 'Zitronendressing'] },
  // Suppen
  { 'nr': 19, 'desc': 'Rindssuppe mit Kalbfleisch-Ravioli ', 'price': 7, 'category_nr': 3, 'optionals': [], 'ingredients': ['Rindssuppe', 'Ravioli'] },
  { 'nr': 20, 'desc': 'Feines Erbsen-Minze-Zitronensüppchen', 'price': 8, 'category_nr': 3, 'optionals': [], 'ingredients': [] },
  { 'nr': 21, 'desc': 'Japanische Misosuppe', 'price': 8, 'category_nr': 3, 'optionals': [], 'ingredients': [] },
  // Hauptspeisen
  { 'nr': 22, 'desc': 'Medaillons vom Rinderfilet mit leicht süßer südtiroler „Puni“-Whiskey-Sauce mit Gemüse-Caponata und Pilaf-Reis', 'price': 26, 'category_nr': 4, 'optionals': [], 'ingredients': ['Rinderfilet', 'Whiskey-Sauce', 'Gemüse-Caponata', 'Pilaf-Reis'] },
  { 'nr': 23, 'desc': 'Tartar vom Rind, nach Art des Hauses, serviert mit knusprigem Toastbrot', 'price': 20, 'category_nr': 4, 'optionals': [], 'ingredients': ['Tartar', 'Toastbrot'] },
  { 'nr': 24, 'desc': 'In Lagrein geschmortes Rinds-Rib Eye mit gegrillt-mariniertem Gemüse und Spezial Püree', 'price': 20, 'category_nr': 4, 'optionals': [], 'ingredients': ['Rib Eye', 'Gemüse', 'Püree'] },
  { 'nr': 25, 'desc': 'Rinsdsschnitte mit Rotweinsauce, Gemüse-Caponata und Rosmarinkartoffeln', 'price': 23, 'category_nr': 4, 'optionals': [], 'ingredients': ['Rinsdsschnitte', 'Rotweinsauce', 'Gemüse', 'Rosmarinkartoffeln'] },
  { 'nr': 26, 'desc': 'Lammhüfte mit Kicherebsenpüree, Butterschoten und Polenta', 'price': 25, 'category_nr': 4, 'optionals': [], 'ingredients': ['Lammhüfte', 'Kicherebsenpüree', 'Butterschoten', 'Polenta'] },
  { 'nr': 27, 'desc': 'Kalbsfilet mit grüner Pfeffersauce, gegrillt-mariniertem Gemüse und Pilafreis', 'price': 24, 'category_nr': 4, 'optionals': [], 'ingredients': ['Kalbsfilet', 'Pfeffersauce', 'Gemüse', 'Pilafreis'] },
  { 'nr': 28, 'desc': 'Zart schmelzender Tomino-Käse mit Grillgemüse und hausgemachter Mostarda', 'price': 17, 'category_nr': 4, 'optionals': [], 'ingredients': ['Tomino-Käse', 'Grillgemüse', 'Mostarda'] },
  { 'nr': 29, 'desc': 'Kurkuma-Teigtaschen mit Spargel-Kichererbsenfüllung und Löwenzahnsauce', 'price': 13, 'category_nr': 4, 'optionals': [], 'ingredients': ['Teigtaschen', 'Spargel-Kichererbsenfüllung', 'Löwenzahnsauce'] },
  // Fisch
  { 'nr': 30, 'desc': 'Wolfsbarschfilet mit gegrillt-mariniertem Gemüse und Rosmarinkartoffeln', 'price': 25, 'category_nr': 5, 'optionals': [], 'ingredients': ['Wolfsbarschfilet', 'Gemüse', 'Rosmarinkartoffeln'] },
  { 'nr': 31, 'desc': 'Gegrillte Riesengarnelen mit gegrillt-mariniertem Gemüse und Rosmarinkartoffeln', 'price': 23, 'category_nr': 5, 'optionals': [], 'ingredients': ['Riesengarnelen', 'Gemüse', 'Rosmarinkartoffeln'] },
  
  // Desserts
  { 'nr': 32, 'desc': 'Eiskaffee', 'price': 5.5, 'category_nr': 6, 'optionals': ['Sahne', 'Koffeinfrei'], 'ingredients': [] },
  { 'nr': 33, 'desc': 'Eisschokolade', 'price': 5.5, 'category_nr': 6, 'optionals': ['Sahne'], 'ingredients': [] },
  { 'nr': 34, 'desc': 'Hausgemachtes Tiramisu', 'price': 6.5, 'category_nr': 6, 'optionals': [], 'ingredients': [] },
  { 'nr': 35, 'desc': 'Apfelstrudel', 'price': 6, 'category_nr': 6, 'optionals': ['Sahne'], 'ingredients': [] },
  { 'nr': 36, 'desc': 'Schokoladentörtchen', 'price': 6, 'category_nr': 6, 'optionals': ['Sahne'], 'ingredients': [] },
  { 'nr': 37, 'desc': 'Mangoparfait', 'price': 6, 'category_nr': 6, 'optionals': [], 'ingredients': [] },

  /*{ 'nr': 12, 'desc': 'Kartoffel', 'price': 4.5, 'category_nr': 4, 'optionals': [], 'ingredients': [] },
  { 'nr': 13, 'desc': 'Pommes', 'price': 3.5, 'category_nr': 4, 'optionals': [], 'ingredients': [] },
  { 'nr': 14, 'desc': 'Salat', 'price': 3, 'category_nr': 4, 'optionals': [], 'ingredients': [] },*/

  { 'nr': 38, 'desc': 'Bier', 'price': 3.5, 'category_nr': 8, 'optionals': [], 'ingredients': [] },
  { 'nr': 39, 'desc': 'Hefe', 'price': 5, 'category_nr': 8, 'optionals': [], 'ingredients': [] },
  { 'nr': 40, 'desc': 'Wein', 'price': 4.5, 'category_nr': 8, 'optionals': [], 'ingredients': [] },
  { 'nr': 41, 'desc': 'Saft', 'price': 3, 'category_nr': 8, 'optionals': [], 'ingredients': [] },
  { 'nr': 42, 'desc': 'Cola', 'price': 3, 'category_nr': 8, 'optionals': [], 'ingredients': [] },
  { 'nr': 43, 'desc': 'Wasser', 'price': 2.5, 'category_nr': 8, 'optionals': [], 'ingredients': [] },

  { 'nr': 44, 'desc': 'Margherita', 'price': 5.5, 'category_nr': 10, 'optionals': [], 'ingredients': ['Tomatensauce', 'Mozzarella', 'Origano'] },
  { 'nr': 45, 'desc': 'Scharfe Salami', 'price': 6.5, 'category_nr': 10, 'optionals': [], 'ingredients': ['Tomatensauce', 'Mozzarella', 'Origano', 'Salami'] },
  { 'nr': 46, 'desc': 'Thunfisch-Zwiebel', 'price': 7.5, 'category_nr': 10, 'optionals': [], 'ingredients': ['Tomatensauce', 'Mozzarella', 'Origano', 'Thunfisch', 'Zwiebel'] },
  { 'nr': 47, 'desc': 'Schinken-Pilze', 'price': 7.5, 'category_nr': 10, 'optionals': [], 'ingredients': ['Tomatensauce', 'Mozzarella', 'Origano', 'Schinken', 'Champignons'] },
  { 'nr': 48, 'desc': 'Capricciosa', 'price': 8, 'category_nr': 10, 'optionals': [], 'ingredients': ['Tomatensauce', 'Mozzarella', 'Origano', 'Schinken', 'Champignons', 'Artischoken', 'Oliven'] },
  { 'nr': 49, 'desc': 'Schinken', 'price': 6.5, 'category_nr': 10, 'optionals': [], 'ingredients': ['Tomatensauce', 'Mozzarella', 'Origano', 'Schinken'] },
  { 'nr': 50, 'desc': 'Gemüse', 'price': 8, 'category_nr': 10, 'optionals': [], 'ingredients': ['Tomatensauce', 'Mozzarella', 'Origano', 'Parmesan', 'Zucchini', 'Grüne Bohnen', 'Melanzane', 'Spargel', 'Gegrillte Peperoni', 'Mais'] },
  { 'nr': 51, 'desc': 'Thunfisch', 'price': 7, 'category_nr': 10, 'optionals': [], 'ingredients': ['Tomatensauce', 'Mozzarella', 'Origano', 'Thunfisch'] },
  { 'nr': 52, 'desc': 'Teufel', 'price': 8, 'category_nr': 10, 'optionals': [], 'ingredients': ['Tomatensauce', 'Mozzarella', 'Origano', 'Scharfe Salami', 'Peperonata', 'Peperoni Lombardi', 'Oliven'] },
  { 'nr': 53, 'desc': 'Vier Käse', 'price': 7.5, 'category_nr': 10, 'optionals': [], 'ingredients': ['Tomatensauce', 'Mozzarella', 'Origano', 'Edamer / Fontal', 'Gorgonzola'] },
  { 'nr': 54, 'desc': 'Arrabiata', 'price': 7.5, 'category_nr': 10, 'optionals': [], 'ingredients': ['Tomatensauce', 'Mozzarella', 'Scharfe Salami', 'Knoblauch', 'Parmesan'] },
  { 'nr': 55, 'desc': 'Mais', 'price': 6.5, 'category_nr': 10, 'optionals': [], 'ingredients': ['Tomatensauce', 'Mozzarella', 'Origano', 'Mais'] },
];