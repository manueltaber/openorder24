import {Component} from '@angular/core';
import {NavController} from 'ionic-angular';
import {BasePage} from '../base';
import {SettingService} from '../../services/setting.service';
import {TranslationService} from '../../services/translation.service';

@Component({
  templateUrl: 'build/pages/settings/settings.html'
})
export class SettingsPage extends BasePage {

  settings: Setting[] = [];

  constructor(protected nav: NavController, 
              protected settingService: SettingService,
              protected translationService: TranslationService) {
    super(settingService, translationService);
    let userLang = navigator.language || navigator.userLanguage;
    this.addSetting('LANGUAGE', 'DEU');
    this.addSetting('SELF_HOSTED', false);
    this.addSetting('SELF_HOSTED_IP', '192.168.1.1');
    this.addSetting('SELF_HOSTED_PORT', 80);
  }

  addSetting(settingName: string, defaultValue: any) {
    let setting = new Setting();
    setting.name = settingName;
    setting.value = this.settingService.getSetting(setting.name, defaultValue);
    this.settings.push(setting);
  }

  onEditSetting(setting: Setting) {

  }

}

class Setting {
  name: string;
  value: any;
}