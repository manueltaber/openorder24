import {Component} from '@angular/core';
import {NavController} from 'ionic-angular';
import {CustomSearchbar} from '../../components/custom-searchbar/custom-searchbar.component';
import {SearchTermChangedEventArgs} from '../../components/custom-searchbar/custom-searchbar.classes';
import {AreaDetailPage} from '../area-detail/area-detail';
import {Area} from '../../classes/area';
import {AreaService} from '../../services/area.service';
import {OrderService} from '../../services/order.service';
import {TranslationService} from '../../services/translation.service';

@Component({
  templateUrl: 'build/pages/area-selection/area-selection.html',
  directives: [CustomSearchbar]
})
export class AreaSelectionPage {
  
  areas: Area[];

  constructor(private nav: NavController, 
              private areaService: AreaService,
              private orderService: OrderService,
              private translationService: TranslationService) {
    //this.areas = AREAS;
    this.areas = areaService.getAreas();
  }
    
  getOpenOrderCount(area: Area) {
    return this.orderService.getOpenOrdersByArea(area).length;
  }

  onAreaSelected(event, area) {
    this.nav.push(AreaDetailPage, {area: area});
  }

  onSearchTermChanged(event: SearchTermChangedEventArgs) {
    this.areas = this.areas.filter(area => area.desc
                                           .toUpperCase()
                                           .indexOf(event.searchTerm.toUpperCase()) >= 0)
  }
}
