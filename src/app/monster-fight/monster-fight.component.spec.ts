import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MonsterFightComponent } from './monster-fight.component';

describe('MonsterFightComponent', () => {
  let component: MonsterFightComponent;
  let fixture: ComponentFixture<MonsterFightComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MonsterFightComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MonsterFightComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
