import {Page, NavController, NavParams, Alert} from 'ionic-angular';
import {Area} from '../../classes/area';
import {Category} from '../../classes/category';
import {CategoryService} from '../../services/category.service';
import {OrderService} from '../../services/order.service';
import {ItemSelectionPage} from '../item-selection/item-selection';
import {OrderingFooterComponent} from '../../components/ordering-footer/ordering-footer.component';

@Page({
  templateUrl: 'build/pages/category-selection/category-selection.html',
  directives: [OrderingFooterComponent]
})
export class CategorySelectionPage {
  
  area: Area;
  categories: Category[];
  searching: boolean;

  constructor(private nav: NavController, private navParams: NavParams,
              private categoryService: CategoryService, private orderService: OrderService) {
    //this.areas = AREAS;
    this.area = navParams.get('area');
    this.categories = categoryService.getCategories();
    this.searching = false;
  }

  onTempOrdersConfirmed() {
    this.nav.popToRoot();
  }

  onTempOrdersCanceled() {
    this.nav.popToRoot();
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
    
    this.nav.push(ItemSelectionPage, {area: this.area, category: category});
  }
}
