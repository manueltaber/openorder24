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
  variantGroups: VariantGroup[] = [];

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

    this.pushIngredients(this.category.ingredients);
    this.pushIngredients(this.item.ingredients);
    this.pushOptionals(this.category.optionals);
    this.pushOptionals(this.item.optionals);
    this.pushVariants(this.category.variants);
    this.pushVariants(this.item.variants);

    console.log(this.variantGroups);
  }

  pushIngredients(ingredients: string[]) {
    for (let ing of ingredients) {
      let ingredient = new Ingredient();
      ingredient.ingredient = ing;
      ingredient.selected = true;
      this.ingredients.push(ingredient);
    }
  }

  pushOptionals(optionals: Extra[]) {
    for (let opt of optionals) {
      let optional = new Optional();
      optional.optional = opt;
      optional.selected = opt.default;
      this.optionals.push(optional);
    }
  }

  pushVariants(variantGroups: ExtraGroup[]) {
    for (let varGroup of variantGroups) {
      let variantGroup = new VariantGroup();
      variantGroup.variantGroup = varGroup;
      for (let vari of varGroup.extras) {
        let variant = new Variant();
        variant.variant = vari;
        if (vari.default) {
          variantGroup.selectedVariant = variant.variant.desc;
        }
        variantGroup.variants.push(variant);
      }
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
}

class VariantGroup {
  variantGroup: ExtraGroup;
  variants: Variant[] = [];
  selectedVariant: string;
}