import {Page, NavController, Alert} from 'ionic-angular';
import {Category} from '../../classes/category';
import {CategoryService} from '../../services/category.service';
import {ItemSelectionPage} from '../item-selection/item-selection';

@Page({
  templateUrl: 'build/pages/category-selection/category-selection.html',
  providers: [CategoryService]
})
export class CategorySelectionPage {
  
  categories: Category[];
  searching: boolean;

  constructor(private nav: NavController, categoryService: CategoryService) {
    //this.areas = AREAS;
    this.categories = categoryService.getCategories();
    this.searching = false;
  }
  
  onCategorySelected(event, category: Category) {
    /*let confirm = Alert.create({
      title: 'Achtung',
      message: 'Sicher?',
      buttons: [
        {
          text: 'Ja',
          handler: () => {
            alert('Ja');
          }
        },
        {
          text: 'Nein',
          handler: () => {
            alert('Nein');
          }
        }
      ]
    });
    this.nav.present(confirm);*/
    
    this.nav.push(ItemSelectionPage, {
      category: category
    });
  }
}
