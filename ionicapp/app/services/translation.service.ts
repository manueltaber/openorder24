import {Injectable} from '@angular/core';

@Injectable()
export class TranslationService {

  translations = {};
  language: Language = Language.DEU;

  constructor() {}
  
  getTranslation(name: string) {
    return this.translations[name]['DEU']
  }
  
  loadTranslations() {
      this.translations = TRANSLATIONS;
  }

}

export enum Language { DEU, ITA, ENG }

export class Translation {
    name: string;
    translation: string;
}

export var TRANSLATIONS = {
    'DASHBOARD': {'DEU': 'Dashboard', 'ITA': 'Dashboard', 'ENG': 'Dashboard'},
    'LOGIN': {'DEU': 'Login', 'ITA': 'Login', 'ENG': 'Login'},
    'ORDERING': {'DEU': 'Bestellen', 'ITA': '', 'ENG': 'Ordering'},
    'MAIN_DATA': {'DEU': 'Stammdaten', 'ITA': '', 'ENG': 'Manin data'},
    'STATISTICS': {'DEU': 'Statistiken', 'ITA': '', 'ENG': 'Statistics'},
    'SETTINGS': {'DEU': 'Einstellungen', 'ITA': '', 'ENG': 'Settings'},
    'HELP': {'DEU': 'Hilfe', 'ITA': 'Aiuto', 'ENG': 'Help'}
}