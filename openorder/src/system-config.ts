/***********************************************************************************************
 * User Configuration.
 **********************************************************************************************/
/** Map relative paths to URLs. */
const map: any = {
  '@angular2-material/core': 'vendor/@angular2-material/core',
  '@angular2-material/button': 'vendor/@angular2-material/button',
  '@angular2-material/sidenav': 'vendor/@angular2-material/sidenav',
  '@angular2-material/toolbar': 'vendor/@angular2-material/toolbar'
};

/** User packages configuration. */
const packages: any = {
  '@angular2-material/core': { main: 'core.js', defaultExtension: 'js'},
  '@angular2-material/button': { main: 'button.js', defaultExtension: 'js'},
  '@angular2-material/sidenav': { main: 'sidenav.js', defaultExtension: 'js'},
  '@angular2-material/toolbar': { main: 'toolbar.js', defaultExtension: 'js'}
};

////////////////////////////////////////////////////////////////////////////////////////////////
/***********************************************************************************************
 * Everything underneath this line is managed by the CLI.
 **********************************************************************************************/
const barrels: string[] = [
  // Angular specific barrels.
  '@angular/core',
  '@angular/common',
  '@angular/compiler',
  '@angular/http',
  '@angular/router',
  '@angular/platform-browser',
  '@angular/platform-browser-dynamic',

  // Thirdparty barrels.
  'rxjs',

  // App specific barrels.
  'app',
  'app/shared',
  'app/area-selection',
  'app/area-detail',
  'app/category-selection',
  'app/item-selection',
  /** @cli-barrel */
];

const cliSystemConfigPackages: any = {};
barrels.forEach((barrelName: string) => {
  cliSystemConfigPackages[barrelName] = { main: 'index' };
});

/** Type declaration for ambient System. */
declare var System: any;

// Apply the CLI SystemJS configuration.
System.config({
  map: {
    '@angular': 'vendor/@angular',
    'rxjs': 'vendor/rxjs',
    'main': 'main.js'
  },
  packages: cliSystemConfigPackages
});

// Apply the user's configuration.
System.config({ map, packages });
