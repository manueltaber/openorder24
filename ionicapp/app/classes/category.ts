import {Optional} from './optional';

export class Category {
  nr: number;
  desc: string;
  icon: string;
  optionals: Optional[] = [];
}
