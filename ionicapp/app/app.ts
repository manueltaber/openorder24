import {ViewChild} from '@angular/core';
import {App, Platform, MenuController, Nav} from 'ionic-angular';
import {StatusBar} from 'ionic-native';
import {DashboardPage} from './pages/dashboard/dashboard';
import {AreaSelectionPage} from './pages/area-selection/area-selection';


@App({
  templateUrl: 'build/app.html',
  config: {} // http://ionicframework.com/docs/v2/api/config/Config/
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
      { title: 'Login', component: AreaSelectionPage, icon: 'beer' },
      { title: 'Ordering', component: AreaSelectionPage, icon: 'beer' },
      { title: 'Main data', component: AreaSelectionPage, icon: 'create' },
      { title: 'Statistics', component: AreaSelectionPage, icon: 'pie' },
      { title: 'Settings', component: AreaSelectionPage, icon: 'construct' },
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
