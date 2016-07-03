import {Component} from '@angular/core';
import {NavController} from 'ionic-angular';
import {SettingService} from '../../services/setting.service';
import {TranslationService} from '../../services/translation.service';

@Component({
  templateUrl: 'build/pages/settings/settings.html'
})
export class SettingsPage {

  settings: string[];

  constructor(private nav: NavController, 
              private settingService: SettingService,
              private translationService: TranslationService) {

  }

}
