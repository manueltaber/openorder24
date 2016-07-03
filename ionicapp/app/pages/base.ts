import {SettingService} from '../services/setting.service';
import {TranslationService} from '../services/translation.service';

export class BasePage {

  constructor(protected settingService: SettingService,
              protected translationService: TranslationService) {
  }

  getSetting(name: string, defaultValue: any) {
      return this.settingService.getSetting(name, defaultValue);
  }

  getTranslation(name: string): string {
      return this.translationService.getTranslation(name);
  }

}
