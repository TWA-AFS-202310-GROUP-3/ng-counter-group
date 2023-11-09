import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CounterComponent } from './counter.component';

describe('CounterComponent', () => {
  let component: CounterComponent;
  let fixture: ComponentFixture<CounterComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CounterComponent]
    });
    fixture = TestBed.createComponent(CounterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should return 3 when onIncreaseNumber given number is 2', () => {
    component.number = 2;

    component.onIncreaseNumber();

    expect(component.number).toEqual(3);
  })

  
  it('should return 1 when onDecreaseNumber given number is 2', () => {
    component.number = 2;

    component.onDecreaseNumber();

    expect(component.number).toEqual(1);
  })


});
