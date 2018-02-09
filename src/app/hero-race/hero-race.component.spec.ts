import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HeroRaceComponent } from './hero-race.component';

describe('HeroRaceComponent', () => {
  let component: HeroRaceComponent;
  let fixture: ComponentFixture<HeroRaceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HeroRaceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeroRaceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
