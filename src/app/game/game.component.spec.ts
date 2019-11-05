import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { GameComponent } from './game.component';
import { GameService } from './game.service';

describe('GameComponent', () => {
  let component: GameComponent;
  let fixture: ComponentFixture<GameComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GameComponent ],
      providers: [
        { provide: ActivatedRoute, useClass: Stub },
        { provide: GameService, useClass: Stub }
      ],
      schemas: [ NO_ERRORS_SCHEMA ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).not.toBeTruthy();
  });
});

class Stub {
  snapshot = { queryParams: ['query', 'param'] };
  setPlayers() {}
  getMarkedNumber() {}
  getSelectedSides() {}
  getCurrentPlayer() {}
}
