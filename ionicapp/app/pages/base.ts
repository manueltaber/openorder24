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

    /* Methods for saving page settings */

    private getPageSettingDBName(): string {
        return "oo24_" + (<any>this).constructor.name;
    }

    private getPageSettingStorage(): Storage {
        let storageOptions = { name: this.getPageSettingDBName() };
        let storage = new Storage(SqlStorage, storageOptions);
        return storage;
    }

    protected savePageSetting(key: string, value: string) {
        let storage = this.getPageSettingStorage();
        storage.set(key, value);
    }

    protected getPageSetting(key: string, defaultValue: string): any {
        let storage = this.getPageSettingStorage();
        storage.get(key).then((value) => {
            if (value == undefined) {
                return defaultValue;
            }
            return value;
        });
    }

}
