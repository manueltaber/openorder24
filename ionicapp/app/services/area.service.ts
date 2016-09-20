import {Injectable} from '@angular/core';
import {Http} from '@angular/http';
import {AuthHttp} from 'angular2-jwt';

import {Area} from '../classes/area'
import {getMockAreas} from '../mockups/areas';

@Injectable()
export class AreaService {

    private areas: Area[];
    private loadedAreas: Area[];

    constructor(private http: Http, private authHttp: AuthHttp) {
        this.areas = getMockAreas();
        this.loadAreas();
    }
  
    public getAreas(): Area[] {
        return this.areas;
    }
  
    public getAreaByNr(nr: number): Area {
        let area: Area;
        for (area of this.areas) {
            if (area.nr == nr) {
                return area;
            }
        }
    }

    public loadAreas() {
        this.authHttp.get("https://openorder24.herokuapp.com/api/v0/areas/get")
            .map(res => res.json())
            .subscribe(
                data => this.loadedAreas = data,
                err => console.log(err)
            );
    }

    public createArea(area: Area) {
        console.log("createArea");
    }

    public updateArea(area: Area) {
        console.log("updateArea");
    }

    public deleteArea(area: Area) {
        console.log("deleteArea");
    }

}
