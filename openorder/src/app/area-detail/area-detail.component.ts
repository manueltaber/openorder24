import { Component } from '@angular/core';
import { OnActivate, Router, RouteSegment } from '@angular/router';
import { MdButton } from '@angular2-material/button';

import { DataProviderService, Area } from '../data-provider.service';

@Component({
  moduleId: module.id,
  selector: 'area-detail',
  templateUrl: 'area-detail.component.html',
  styleUrls: ['area-detail.component.css'],
  providers: [DataProviderService],
  directives: [MdButton]
})
export class AreaDetailComponent implements OnActivate   {

  area: Area;

  constructor(
    private router: Router,
    private dataProviderService: DataProviderService) { }

  routerOnActivate(curr: RouteSegment): void {
    let nr = +curr.getParam('nr');
    this.dataProviderService.getArea(nr).then(area => this.area = area);
  }

  gotoAreas() {
    // Like <a [routerLink]="['/heroes']">Heroes</a>
    this.router.navigate(['/area-selection']);
  }

}
