import {
  beforeEachProviders,
  it,
  describe,
  expect,
  inject
} from '@angular/core/testing';
import { DataProviderService } from './data-provider.service';

describe('DataProvider Service', () => {
  beforeEachProviders(() => [DataProviderService]);

  it('should ...',
      inject([DataProviderService], (service: DataProviderService) => {
    expect(service).toBeTruthy();
  }));
});
