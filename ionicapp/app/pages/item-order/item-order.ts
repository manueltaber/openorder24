import {Component} from '@angular/core';
import {NavController, NavParams} from 'ionic-angular';

import {Area} from '../../classes/area';
import {Category} from '../../classes/category';
import {Item} from '../../classes/item';

import {BasePage} from '../base';

import {OrderService} from '../../services/order.service';
import {SettingService} from '../../services/setting.service';
import {TranslationService} from '../../services/translation.service';

@Component({
  templateUrl: 'build/pages/item-order/item-order.html'
})
export class ItemOrderPage extends BasePage {
  
  area: Area;
  category: Category;
  item: Item;

  count: number;
  desc: string;

  optionals: Optional[] = [];
  ingredients: Ingredient[] = [];

  constructor(protected nav: NavController, protected navParams: NavParams,
              protected orderService: OrderService,
              protected settingService: SettingService,
              protected translationService: TranslationService) {
    super(settingService, translationService);

    this.area = navParams.get('area');
    this.category = navParams.get('category');
    this.item = navParams.get('item');

    this.count = 1;
    this.desc = '';

    this.pushOptionals(this.category.optionals, false);
    this.pushOptionals(this.item.optionals, false);
    this.pushIngredients(this.category.ingredients, true);
    this.pushIngredients(this.item.ingredients, true);
  }

  pushOptionals(optionals: string[], selected: boolean) {
    for (let opt of optionals) {
      let optional = new Optional();
      optional.name = opt;
      optional.selected = selected;
      this.optionals.push(optional);
    }
  }

  pushIngredients(ingredients: string[], selected: boolean) {
    for (let ing of ingredients) {
      let ingredient = new Ingredient();
      ingredient.name = ing;
      ingredient.selected = selected;
      this.ingredients.push(ingredient);
    }
  }

  optionalsAvailable(): boolean {
    return this.optionals.length > 0;
  }

  ingredientsAvailable(): boolean {
    return this.ingredients.length > 0;
  }
  
  onConfirmItem(event) {
    this.orderService.addNewTempOrder(this.area, this.item);
    this.nav.pop().then(() => {this.nav.pop()});
  }
}

class Optional {
  name: string;
  selected: boolean;
}

class Ingredient {
  name: string;
  selected: boolean;
}
