import {Page, NavController} from 'ionic-angular';
import {AreaDetailPage} from '../area-detail/area-detail';

import {Area} from '../../classes/area';
import {AreaService} from '../../services/area.service';
import {OrderService} from '../../services/order.service';

@Page({
  templateUrl: 'build/pages/area-selection/area-selection.html',
  providers: [AreaService, OrderService]
})
export class AreaSelectionPage {
  
  areas: Area[];
  searching: boolean;

  constructor(private nav: NavController, areaService: AreaService,
              orderService: OrderService) {
    //this.areas = AREAS;
    this.areas = areaService.getAreas();
    this.searching = false;
  }

  itemTapped(event, area) {
    this.nav.push(AreaDetailPage, {
      area: area
    });
  }
}
