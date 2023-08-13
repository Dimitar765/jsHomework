import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarsListComponentComponent } from './cars-list-component.component';

describe('CarsListComponentComponent', () => {
  let component: CarsListComponentComponent;
  let fixture: ComponentFixture<CarsListComponentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CarsListComponentComponent]
    });
    fixture = TestBed.createComponent(CarsListComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
