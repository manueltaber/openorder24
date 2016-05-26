import { Component, OnInit } from '@angular/core';
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

  constructor(private dataProvicerService: DataProviderService) { }

  getAreas() {
    this.dataProvicerService.getAreas().then(areas => this.areas = areas);
  }

  ngOnInit() {
    this.getAreas();
  }

}
