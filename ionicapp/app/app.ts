import {ViewChild} from '@angular/core';
import {App, Platform, MenuController, Nav} from 'ionic-angular';
import {StatusBar} from 'ionic-native';
import {DashboardPage} from './pages/dashboard/dashboard';
import {AreaSelectionPage} from './pages/area-selection/area-selection';
import {AreaService} from './services/area.service';
import {CategoryService} from './services/category.service';
import {ItemService} from './services/item.service';
import {OrderService} from './services/order.service';
import {TranslationService} from './services/translation.service';

@App({
  templateUrl: 'build/app.html',
  config: {}, // http://ionicframework.com/docs/v2/api/config/Config/
  providers: [AreaService, CategoryService, ItemService, OrderService, TranslationService]
})
class MyApp {
  @ViewChild(Nav) nav: Nav;

  // make DashboardPage the root (or first) page
  rootPage: any = DashboardPage;
  pages: Array<{title: string, component: any, icon: string}>;

  constructor(
    private platform: Platform,
    private menu: MenuController
  ) {
    this.initializeApp();

    // set our app's pages
    this.pages = [
      { title: 'Dashboard', component: DashboardPage, icon: 'apps' },
      { title: 'Login', component: AreaSelectionPage, icon: 'log-in' },
      { title: 'Ordering', component: AreaSelectionPage, icon: 'clipboard' },
      { title: 'Live monitor', component: AreaSelectionPage, icon: 'desktop' },
      { title: 'Main data', component: AreaSelectionPage, icon: 'create' },
      { title: 'Statistics', component: AreaSelectionPage, icon: 'pie' },
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
