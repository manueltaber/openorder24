import {
  beforeEachProviders,
  describe,
  expect,
  it,
  inject
} from '@angular/core/testing';
import { OpenorderAppComponent } from '../app/openorder.component';

beforeEachProviders(() => [OpenorderAppComponent]);

describe('App: Openorder', () => {
  it('should create the app',
      inject([OpenorderAppComponent], (app: OpenorderAppComponent) => {
    expect(app).toBeTruthy();
  }));

  it('should have as title \'openorder.component works!\'',
      inject([OpenorderAppComponent], (app: OpenorderAppComponent) => {
    expect(app.title).toEqual('openorder.component works!');
  }));
});
