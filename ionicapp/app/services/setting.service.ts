import {Injectable} from '@angular/core';

@Injectable()
export class SettingService {

  settingPrefix: string = 'SETTING_SERVICE_';
  settings: Setting[] = [];

  constructor() {}

  getSettingStorageName(settingKey: string) {
    return this.settingPrefix + settingKey.toUpperCase();
  }

  loadSettingFromStorage(settingKey: string) {
    let storageName = this.getSettingStorageName(settingKey);
    let value = localStorage.getItem(storageName);
    if (value) {
      return value;
    }
    return null;
  }

  saveSettingToStorage(settingKey: string, settingValue: any) {
    let storageName = this.getSettingStorageName(settingKey);
    localStorage.setItem(storageName, settingValue);
  }

  getSetting(settingKey: string, defaultValue: any) {
    let value = this.loadSettingFromStorage(settingKey);
    if (value) {
      return value;
    } else {
      this.saveSettingToStorage(settingKey, defaultValue);
      return defaultValue;
    }
  }
}

export class Setting {
  name: string;
  value: any;
}
