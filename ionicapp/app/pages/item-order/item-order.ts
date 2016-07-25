import {Component} from '@angular/core';
import {NavController, NavParams} from 'ionic-angular';

import {Area} from '../../classes/area';
import {Category} from '../../classes/category';
import {Extra, ExtraGroup} from '../../classes/extra';
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
  note: string;

  ingredients: Ingredient[] = [];
  optionals: Optional[] = [];
  variantGroups: ExtraGroup[] = [];

  constructor(protected nav: NavController, protected navParams: NavParams,
              protected orderService: OrderService,
              protected settingService: SettingService,
              protected translationService: TranslationService) {
    super(settingService, translationService);

    this.area = navParams.get('area');
    this.category = navParams.get('category');
    this.item = navParams.get('item');

    this.count = 1;
    this.note = '';

    this.pushIngredients(this.category.ingredients, true);
    this.pushIngredients(this.item.ingredients, true);
    this.pushOptionals(this.category.optionals, false);
    this.pushOptionals(this.item.optionals, false);
    this.pushVariants(this.category.variants, false);
    this.pushVariants(this.item.variants, false);
  }

  pushIngredients(ingredients: string[], selected: boolean) {
    for (let ing of ingredients) {
      let ingredient = new Ingredient();
      ingredient.ingredient = ing;
      ingredient.selected = selected;
      this.ingredients.push(ingredient);
    }
  }

  pushOptionals(optionals: Extra[], selected: boolean) {
    for (let opt of optionals) {
      let optional = new Optional();
      optional.optional = opt;
      optional.selected = selected;
      this.optionals.push(optional);
    }
  }

  pushVariants(variantGroups: ExtraGroup[], selected: boolean) {
    for (let variantGroup of variantGroups) {
      this.variantGroups.push(variantGroup);
    }
  }

  ingredientsAvailable(): boolean {
    return this.ingredients.length > 0;
  }

  optionalsAvailable(): boolean {
    return this.optionals.length > 0;
  }

  variantsAvailable(): boolean {
    return this.variantGroups.length > 0;
  }
  
  onConfirmItem(event) {
    this.orderService.addNewTempOrder(this.area, this.item);
    this.nav.pop().then(() => {this.nav.pop()});
  }
}

class Ingredient {
  ingredient: string;
  selected: boolean;
}

class Optional {
  optional: Extra;
  selected: boolean;
}

class Variant {
  variant: Extra;
  selected: boolean;
}
