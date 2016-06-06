import {Injectable} from '@angular/core';

@Injectable()
export class SettingService {

  constructor() {}

}

export enum SettingType {
    stBoolean, stInteger, stString
}

export class Setting {
    settingType: SettingType;
    settingValue: any;
    settingValueMin: any;
    settingValueMax: any;
}