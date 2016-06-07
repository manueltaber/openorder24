import {Injectable} from '@angular/core';
import {Area} from '../classes/area'
import {AREAS} from '../mockups/areas';

@Injectable()
export class AreaService {

  constructor() {}
  
  getAreas() {
    return AREAS;
  }
  
  getArea(nr: number) {
    return Promise.resolve(AREAS)
      .then(areas => areas.filter(a => a.nr === +nr)[0]);
  }

}
