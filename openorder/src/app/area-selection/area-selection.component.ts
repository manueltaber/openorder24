import { Component, OnInit } from '@angular/core';
import { DataProviderService, Area } from '../data-provider.service';
import { AreaDetailComponent } from '../area-detail/area-detail.component';

@Component({
  moduleId: module.id,
  selector: 'area-selection',
  templateUrl: 'area-selection.component.html',
  styleUrls: ['area-selection.component.css'],
  providers: [DataProviderService],
  directives: [AreaDetailComponent]
})
export class AreaSelectionComponent implements OnInit {

  areas: Area[];
  selectedArea: Area;

  constructor(private dataProvicerService: DataProviderService) { }

  getAreas() {
    this.dataProvicerService.getAreas().then(areas => this.areas = areas);
  }

  ngOnInit() {
    this.getAreas();
  }

  onSelect(area: Area) { 
    this.selectedArea = area; 
  }

}
