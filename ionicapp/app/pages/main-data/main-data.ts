import {Component} from '@angular/core';
import {NavController} from 'ionic-angular';

import {BasePage} from '../base';
import {MainDataAreasPage} from '../main-data/main-data-areas/main-data-areas';

import {SettingService} from '../../services/setting.service';
import {TranslationService} from '../../services/translation.service';

@Component({
  templateUrl: 'build/pages/main-data/main-data.html',
})
export class MainDataPage extends BasePage {

  constructor(protected nav: NavController,
              protected settingService: SettingService,
              protected translationService: TranslationService) {
    super(settingService, translationService);
  }

  onEditAreas(event) {
    this.nav.push(MainDataAreasPage);
  }

  onEditCategories(event) {
    //this.nav.push(MainDataCategoriesPage);
  }

  onEditItems(event) {
    //this.nav.push(MainDataItemsPage);
  }

}
