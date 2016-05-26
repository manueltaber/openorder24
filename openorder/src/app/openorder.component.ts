import { Component } from '@angular/core';
import { AreaSelectionComponent } from './area-selection/area-selection.component';

@Component({
  moduleId: module.id,
  selector: 'openorder-app',
  templateUrl: 'openorder.component.html',
  styleUrls: ['openorder.component.css'],
  directives: [AreaSelectionComponent]
})
export class OpenorderAppComponent {
  title = 'openorder works!';
}
