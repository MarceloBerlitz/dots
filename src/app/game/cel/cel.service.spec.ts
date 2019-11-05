import { TestBed } from '@angular/core/testing';

import { CelService } from './cel.service';
import { GameService } from '../game.service';

describe('CelService', () => {
  let service: CelService;
  beforeEach(() => TestBed.configureTestingModule({
    providers: [
      CelService,
      { provide: GameService, useClass: Stub }
    ]
  }).compileComponents()
    .then(() => {
      service = TestBed.get(CelService);

  }));

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

class Stub {

}
