import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { DataProviderService, Area } from '../data-provider.service';

@Component({
  moduleId: module.id,
  selector: 'area-selection',
  templateUrl: 'area-selection.component.html',
  styleUrls: ['area-selection.component.css'],
  providers: [DataProviderService]
})
export class AreaSelectionComponent implements OnInit {

  areas: Area[];

  constructor(
    private router: Router,
    private dataProviderService: DataProviderService) { }

  getAreas() {
    this.dataProviderService.getAreas().then(areas => this.areas = areas);
  }

  ngOnInit() {
    this.getAreas();
  }

  onSelect(area: Area) {
    this.router.navigate(['/area-detail', area.nr]);
  }

}
