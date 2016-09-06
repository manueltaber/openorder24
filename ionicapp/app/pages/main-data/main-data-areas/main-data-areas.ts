import {Component} from '@angular/core';
import {NavController} from 'ionic-angular';

import {BasePage} from '../../base';

import {Area} from '../../../classes/area';

import {AreaService} from '../../../services/area.service';
import {SettingService} from '../../../services/setting.service';
import {TranslationService} from '../../../services/translation.service';

@Component({
  templateUrl: 'build/pages/main-data/main-data-areas/main-data-areas.html',
})
export class MainDataAreasPage extends BasePage {

  areas: Area[];

  constructor(protected nav: NavController,
              protected areaService: AreaService,
              protected settingService: SettingService,
              protected translationService: TranslationService) {
    super(settingService, translationService);
    this.areas = areaService.getAreas();
  }

}
