import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeeseditComponent } from './employees-edit.component';

describe('EmployeeseditComponent', () => {
  let component: EmployeeseditComponent;
  let fixture: ComponentFixture<EmployeeseditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmployeeseditComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EmployeeseditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
