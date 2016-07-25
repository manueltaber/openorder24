import {Category} from './category';
import {Extra, ExtraGroup} from './extra';

export class Item {
  nr: number;
  desc: string;
  price: number;
  category: Category;
  ingredients: string[] = [];
  optionals: Extra[] = [];
  variants: ExtraGroup[] = [];
}
