import {Injectable} from '@angular/core';
import {Area} from '../classes/area'
import {getMockAreas} from '../mockups/areas';

@Injectable()
export class AreaService {

  private areas: Area[];

  constructor() {
    this.areas = getMockAreas();
  }
  
  getAreas(): Area[] {
    return this.areas;
  }
  
  getAreaByNr(nr: number): Area {
    let area: Area;
    for (area of this.areas) {
      if (area.nr == nr) {
        return area;
      }
    }
  }

}
