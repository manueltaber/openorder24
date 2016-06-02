import {Injectable} from '@angular/core';
import {Category} from '../classes/category'
import {CATEGORIES} from '../mockups/categories';

@Injectable()
export class CategoryService {

  constructor() {}
  
  getCategories() {
    //return Promise.resolve(AREAS);
    return CATEGORIES;
  }
  
  getCategory(nr: number) {
    return Promise.resolve(CATEGORIES)
      .then(categories => categories.filter(c => c.nr === +nr)[0]);
  }

}
