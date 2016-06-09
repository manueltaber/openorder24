import {Component, ViewChild} from '@angular/core';
import {ionicBootstrap, Platform, MenuController, Nav} from 'ionic-angular';
import {StatusBar} from 'ionic-native';
import {ComingSoonPage} from './pages/coming-soon/coming-soon';
import {DashboardPage} from './pages/dashboard/dashboard';
import {AreaSelectionPage} from './pages/area-selection/area-selection';
import {LiveMonitorPage} from './pages/live-monitor/live-monitor';
import {AreaService} from './services/area.service';
import {CategoryService} from './services/category.service';
import {ItemService} from './services/item.service';
import {OrderService} from './services/order.service';
import {TranslationService} from './services/translation.service';

@Component({
  templateUrl: 'build/app.html',
})
class MyApp {
  @ViewChild(Nav) nav: Nav;

  // make DashboardPage the root (or first) page
  rootPage: any = DashboardPage;
  production_pages: Array<{title: string, component: any, icon: string}>;
  general_pages: Array<{title: string, component: any, icon: string}>;

  constructor(
    private platform: Platform,
    private menu: MenuController,
    private translationService: TranslationService
  ) {
    this.initializeApp();

    // set our app's pages
    this.production_pages = [
      { 
        title: this.translationService.getTranslation('DASHBOARD'), 
        component: DashboardPage, 
        icon: 'apps' },
      { 
        title: this.translationService.getTranslation('ORDERING'), 
        component: AreaSelectionPage, 
        icon: 'clipboard' },
      { 
        title: this.translationService.getTranslation('LIVE_MONITOR'), 
        component: LiveMonitorPage, 
        icon: 'desktop' },
      { 
        title: this.translationService.getTranslation('MAIN_DATA'), 
        component: ComingSoonPage, 
        icon: 'create' },
      { 
        title: this.translationService.getTranslation('STATISTICS'), 
        component: ComingSoonPage, 
        icon: 'pie' },
    ];

    this.general_pages = [
      { 
        title: this.translationService.getTranslation('SETTINGS'), 
        component: ComingSoonPage, 
        icon: 'settings' },
      { 
        title: this.translationService.getTranslation('HELP'), 
        component: ComingSoonPage, 
        icon: 'help' },
    ];
  }

  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      StatusBar.styleDefault();
    });
  }

  openPage(page) {
    // close the menu when clicking a link from the menu
    this.menu.close();
    // navigate to the new page if it is not the current page
    this.nav.setRoot(page.component);
  }
}

// Pass the main app component as the first argument
// Pass any providers for your app in the second argument
// Set any config for your app as the third argument:
// http://ionicframework.com/docs/v2/api/config/Config/

ionicBootstrap(MyApp, [AreaService, CategoryService, ItemService, OrderService, TranslationService], {
  //tabbarPlacement: 'bottom'
});