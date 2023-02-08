import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Phone1Component } from './phone1.component';

describe('Phone1Component', () => {
  let component: Phone1Component;
  let fixture: ComponentFixture<Phone1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Phone1Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Phone1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
