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

    private getPageSettingPrefix(): string {
        return "oo24_" + (<any>this).constructor.name;
    }

    private getPageSettingName(key: string): string {
        return this.getPageSettingPrefix() + '_' + key;
    }

    protected savePageSetting(key: string, value: any) {
        let k: string = this.getPageSettingPrefix() + '_' + key;
        localStorage.setItem(k, value);
    }

    protected getPageSetting(key: string, defaultValue: any): any {
        let k: string = this.getPageSettingPrefix() + '_' + key;
        let v: any = localStorage.getItem(k);
        if (v == undefined) {
            return defaultValue;
        }
        return localStorage.getItem(k);
    }

}
