import { Component, Input, OnInit } from '@angular/core';
import { MdButton } from '@angular2-material/button';
import { Area } from '../data-provider.service';

@Component({
  moduleId: module.id,
  selector: 'area-detail',
  templateUrl: 'area-detail.component.html',
  styleUrls: ['area-detail.component.css'],
  directives: [MdButton]
})
export class AreaDetailComponent implements OnInit {

  @Input() 
  area: Area;

  constructor() {

  }

  ngOnInit() {
  }

}
