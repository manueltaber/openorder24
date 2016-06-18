import {Injectable} from '@angular/core';
import {Category} from '../classes/category'
import {getMockCategories} from '../mockups/categories';

@Injectable()
export class CategoryService {

  categories: Category[];

  constructor() {
    this.categories = getMockCategories();
  }
  
  getCategories() {
    return this.categories;
  }
  
  getCategory(nr: number) {
    return Promise.resolve(this.categories)
      .then(categories => categories.filter(c => c.nr === +nr)[0]);
  }

}
