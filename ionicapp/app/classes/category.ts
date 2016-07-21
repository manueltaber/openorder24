import {Extra, ExtraGroup} from './extra';

export class Category {
  nr: number;
  desc: string;
  icon: string;
  ingredients: string[] = [];
  optionals: Extra[] = [];
  variants: ExtraGroup[] = [];
}
