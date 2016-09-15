import {Storage, SqlStorage} from 'ionic-angular';

import {SettingService} from '../services/setting.service';
import {TranslationService} from '../services/translation.service';

export class BasePage {

    constructor(protected settingService: SettingService,
                protected translationService: TranslationService) {
    }

    protected getSetting(name: string, defaultValue: any) {
        return this.settingService.getSetting(name, defaultValue);
    }

    protected getTranslation(name: string): string {
        return this.translationService.getTranslation(name);
    }

    private getPageSettingDBName(): string {
        return "oo24_" + (<any>this).constructor.name;
    }

    protected savePageSetting(key: string, value: any) {
        let storage = new Storage(SqlStorage, { name: this.getPageSettingDBName() });
        storage.set(key, value);
    }

    protected getPageSetting(key: string): any {
        let storage = new Storage(SqlStorage, { name: this.getPageSettingDBName() });
        storage.get(key).then((value) => {return value});
    }

}
