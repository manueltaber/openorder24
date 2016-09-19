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
  
  getCategoryByNr(nr: number) {
    let category: Category;
    for (category of this.categories) {
      if (category.nr == nr) {
        return category;
      }
    }
  }

}
