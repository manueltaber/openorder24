import { Component } from '@angular/core';
import { Routes, ROUTER_DIRECTIVES } from '@angular/router';
import { MdButton } from '@angular2-material/button';
import { MD_LIST_DIRECTIVES } from '@angular2-material/list';
import { MD_TOOLBAR_DIRECTIVES } from '@angular2-material/toolbar';
import { MD_SIDENAV_DIRECTIVES } from '@angular2-material/sidenav';

import { AreaSelectionComponent } from './area-selection/area-selection.component';
import { AreaDetailComponent } from './area-detail/area-detail.component';
import { CategorySelectionComponent } from './category-selection/category-selection.component';

@Component({
  moduleId: module.id,
  selector: 'openorder-app',
  templateUrl: 'openorder.component.html',
  styleUrls: ['openorder.component.css'],
  directives: [ROUTER_DIRECTIVES, MdButton, MD_LIST_DIRECTIVES, MD_TOOLBAR_DIRECTIVES, MD_SIDENAV_DIRECTIVES]
})
@Routes([
  {path: '/area-selection', component: AreaSelectionComponent},
  {path: '/area-detail/:nr', component: AreaDetailComponent},
  {path: '/category-selection', component: CategorySelectionComponent},
])
export class OpenorderAppComponent {
  title = 'openorder.component works!';
}
