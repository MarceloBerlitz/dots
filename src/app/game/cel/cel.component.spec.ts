import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CelComponent } from './cel.component';
import { CelService } from './cel.service';

describe('CelComponent', () => {
  let component: CelComponent;
  let fixture: ComponentFixture<CelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CelComponent ],
      providers: [
        { provide: CelService, useClass: Stub }
      ]
    })
    .compileComponents()
      .then(() => {
        fixture = TestBed.createComponent(CelComponent);
        component = fixture.componentInstance;

      });
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

class Stub {
  getOwner() {}
}
