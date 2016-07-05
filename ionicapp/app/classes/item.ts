import {Category} from './category';

export class Item {
  nr: number;
  desc: string;
  price: number;
  category: Category;
  ingredients: string[] = [];
}
