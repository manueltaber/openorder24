import { Component, Input, OnInit } from '@angular/core';
import { Area } from '../data-provider.service';

@Component({
  moduleId: module.id,
  selector: 'area-detail',
  templateUrl: 'area-detail.component.html',
  styleUrls: ['area-detail.component.css']
})
export class AreaDetailComponent implements OnInit {

  @Input() 
  area: Area;

  constructor() {

  }

  ngOnInit() {
  }

}
