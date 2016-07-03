import {SettingService} from '../services/setting.service';
import {TranslationService} from '../services/translation.service';

export class BasePage {

  constructor(protected settingService: SettingService,
              protected translationService: TranslationService) {
  }

  getTranslation(name: string): string {
      return this.translationService.getTranslation(name);
  }

}
