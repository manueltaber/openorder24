import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MD_BUTTON_DIRECTIVES } from '@angular2-material/button';
import { MD_CARD_DIRECTIVES } from '@angular2-material/card';
import { MD_LIST_DIRECTIVES } from '@angular2-material/list';

import { DataProviderService, Area } from '../data-provider.service';

@Component({
  moduleId: module.id,
  selector: 'area-selection',
  templateUrl: 'area-selection.component.html',
  styleUrls: ['area-selection.component.css'],
  directives: [MD_BUTTON_DIRECTIVES, MD_CARD_DIRECTIVES, MD_LIST_DIRECTIVES],
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
