import {Component} from '@angular/core';
import {NavController} from 'ionic-angular';
import {AreaSelectionPage} from '../area-selection/area-selection';
import {LiveMonitorPage} from '../live-monitor/live-monitor';
import {AreaService} from '../../services/area.service';
import {OrderService} from '../../services/order.service';
import {TranslationService} from '../../services/translation.service';

@Component({
  templateUrl: 'build/pages/dashboard/dashboard.html'
})
export class DashboardPage {
  
  openOrders: number=0;
  openAmount: number=0;
  totalAreas: number=0;

  constructor(private nav: NavController, 
              private areaService: AreaService,
              private orderService: OrderService, 
              private translationService: TranslationService) {
    this.openOrders = orderService.getOpenOrders().length;
    this.openAmount = orderService.getOpenOrdersAmount();
    this.totalAreas = areaService.getAreas().length;
  }
  
  startOrdering(event) {
    this.nav.push(AreaSelectionPage);
  }

  liveMonitor(event) {
    this.nav.push(LiveMonitorPage);
  }
}
