import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Footerr2Component } from './footerr2.component';

describe('Footerr2Component', () => {
  let component: Footerr2Component;
  let fixture: ComponentFixture<Footerr2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Footerr2Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Footerr2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
