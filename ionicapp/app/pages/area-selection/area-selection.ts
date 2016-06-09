import {Component} from '@angular/core';
import {NavController} from 'ionic-angular';
import {AreaDetailPage} from '../area-detail/area-detail';
import {Area} from '../../classes/area';
import {AreaService} from '../../services/area.service';
import {OrderService} from '../../services/order.service';

@Component({
  templateUrl: 'build/pages/area-selection/area-selection.html'
})
export class AreaSelectionPage {
  
  areas: Area[];
  searchbarVisible: boolean;
  searchbarText: string='';

  constructor(private nav: NavController, private areaService: AreaService,
              private orderService: OrderService) {
    //this.areas = AREAS;
    this.areas = areaService.getAreas();
    this.searchbarVisible = false;
  }
  
  getAreas() {
    /*return this.areas.filter(area => area.desc == this.searchbarText)
    return this.areas.then(categories => categories.filter(c => c.nr === +nr)[0])*/
  }
  
  showSearchbar(event) {
    this.searchbarVisible = true;
  }
  
  onSearchbarInput(event) {
    //alert('input');
  }
  
  onSearchbarBlur(event) {
    //alert('blur');
    if (this.searchbarText.length == 0) {
      this.searchbarVisible = false;
    }
  }
  
  onSearchbarCancel(event) {
    alert('cancel');
    this.searchbarVisible = false;
  }
  
  getOpenOrderCount(area: Area) {
    return this.orderService.getOpenOrdersByArea(area).length;
  }

  onAreaSelected(event, area) {
    this.nav.push(AreaDetailPage, {area: area});
  }
}
