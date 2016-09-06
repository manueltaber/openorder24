import {Injectable} from '@angular/core';

@Injectable()
export class TranslationService {

  translations = {};
  language: Language = Language.DEU;

  constructor() {
      this.loadTranslations();
  }
  
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
    'PRODUCTION': {
        'DEU': 'Produktion',
        'ITA': '',
        'ENG': 'Production'},
    'GENERAL': {
        'DEU': 'Allgemein',
        'ITA': '',
        'ENG': 'General'},
    'DASHBOARD': {
        'DEU': 'Dashboard',
        'ITA': 'Dashboard',
        'ENG': 'Dashboard'},
    'ORDERING': {
        'DEU': 'Bestellen',
        'ITA': '',
        'ENG': 'Ordering'},
    'LIVE_MONITOR': {
        'DEU': 'Live-Monitor',
        'ITA': '',
        'ENG': 'Live monitor'},
    'MAIN_DATA': {
        'DEU': 'Stammdaten',
        'ITA': '',
        'ENG': 'Main data'},
    'STATISTICS': {
        'DEU': 'Statistiken',
        'ITA': '',
        'ENG': 'Statistics'},
    'SETTINGS': {
        'DEU': 'Einstellungen',
        'ITA': '',
        'ENG': 'Settings'},
    'HELP': {
        'DEU': 'Hilfe',
        'ITA': '',
        'ENG': 'Help'},
    'AREA_STATISTICS': {
        'DEU': 'Bereichsstatistiken',
        'ITA': '',
        'ENG': 'Area statistics'},
    'ORDER_STATISTICS': {
        'DEU': 'Bestellstatistiken',
        'ITA': '',
        'ENG': 'Order statistics'},
    'TOTAL_AREAS': {
        'DEU': 'Anzahl Bereiche',
        'ITA': '',
        'ENG': 'Total areas'},
    'OPEN_ORDERS': {
        'DEU': 'Offene Bestellungen',
        'ITA': '',
        'ENG': 'Open orders'},
    'OPEN_AMOUNT': {
        'DEU': 'Offener Betrag',
        'ITA': '',
        'ENG': 'Open amount'},
    'START_ORDERING': {
        'DEU': 'Bestellung aufgeben',
        'ITA': '',
        'ENG': 'Start ordering'},
    'AREAS': {
        'DEU': 'Bereiche',
        'ITA': '',
        'ENG': 'Areas'},
    'DO_ORDER': {
        'DEU': 'Bestellen',
        'ITA': '',
        'ENG': 'Order'},
    'ACCOUNTING': {
        'DEU': 'Abrechnung',
        'ITA': '',
        'ENG': 'Accounting'},
    'BILL': {
        'DEU': 'Abrechnen',
        'ITA': '',
        'ENG': 'Bill'},
    'BILL_ALL': {
        'DEU': 'Alles abrechnen',
        'ITA': '',
        'ENG': 'Bill all'},
    'CATEGORIES': {
        'DEU': 'Kategorien',
        'ITA': '',
        'ENG': 'Categories'},
    'ITEMS': {
        'DEU': 'Items',
        'ITA': '',
        'ENG': 'Items'},
    'AVAILABLE': {
        'DEU': 'Verfügbar',
        'ITA': '',
        'ENG': 'Available'},
    'PRICE': {
        'DEU': 'Preis',
        'ITA': '',
        'ENG': 'Price'},
    'COUNT': {
        'DEU': 'Anzahl',
        'ITA': '',
        'ENG': 'Count'},
    'INGREDIENT': {
        'DEU': 'Zutat',
        'ITA': '',
        'ENG': 'Ingredient'},
    'INGREDIENTS': {
        'DEU': 'Zutaten',
        'ITA': '',
        'ENG': 'Ingredients'},
    'OPTIONAL': {
        'DEU': 'Optional',
        'ITA': '',
        'ENG': 'Optional'},
    'OPTIONALS': {
        'DEU': 'Optionals',
        'ITA': '',
        'ENG': 'Optionals'},
    'NOTE': {
        'DEU': 'Notiz',
        'ITA': '',
        'ENG': 'Note'},
    'VARIANT': {
        'DEU': 'Variante',
        'ITA': '',
        'ENG': 'Variant'},
    'VARIANTS': {
        'DEU': 'Varianten',
        'ITA': '',
        'ENG': 'Variants'},
    'ORDERS': {
        'DEU': 'Bestellungen',
        'ITA': '',
        'ENG': 'Orders'},
    'CONFIRM': {
        'DEU': 'Bestätigen',
        'ITA': '',
        'ENG': 'Confirm'},
    'CANCEL': {
        'DEU': 'Abbrechen',
        'ITA': '',
        'ENG': 'Cancel'},
    'YES': {
        'DEU': 'Ja',
        'ITA': '',
        'ENG': 'Yes'},
    'NO': {
        'DEU': 'Nein',
        'ITA': '',
        'ENG': 'No'},
    'ORDER_OVERVIEW': {
        'DEU': 'Bestellübersicht',
        'ITA': '',
        'ENG': 'Order overview'},
    'DONE': {
        'DEU': 'Erledigt',
        'ITA': '',
        'ENG': 'Done'},
    'ATTENTION': {
        'DEU': 'Achtung',
        'ITA': '',
        'ENG': 'Attention'},
    'EDIT_AREAS': {
        'DEU': 'Bereiche editieren',
        'ITA': '',
        'ENG': 'Edit areas'},
    'EDIT_CATEGORIES': {
        'DEU': 'Kategorien editieren',
        'ITA': '',
        'ENG': 'Edit categories'},
    'EDIT_ITEMS': {
        'DEU': 'Items editieren',
        'ITA': '',
        'ENG': 'Edit items'},

    // long texts
    'OPEN_TEMP_ORDERS_WARNING': {
        'DEU': 'Es wurden noch nicht alle Bestellungen versendet. Sind Sie sicher dass Sie abbrechen möchten?',
        'ITA': '',
        'ENG': ''},
}