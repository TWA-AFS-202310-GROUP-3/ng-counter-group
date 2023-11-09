import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CounterComponent } from './counter.component';

describe('CounterComponent', () => {
  let component: CounterComponent;
  let fixture: ComponentFixture<CounterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CounterComponent]
    })
      .compileComponents();

    fixture = TestBed.createComponent(CounterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('should increase number when call onIncrease', () => {
    component.counterNumber = 2;
    component.onIncrease();
    expect(component.counterNumber).toEqual(3);
  });
  it('should isShouldIncrease to be true when number <= 10', () => {
    component.counterNumber = 2;
    expect(component.isShowIncreaseButton).toBeTruthy();
  });

  it('should isShouldIncrease to be false when number > 10', () => {
    component.counterNumber = 11;
    expect(component.isShowIncreaseButton).toBeFalsy();
  });

  it('should isShouldDecrease to be true when number >= 0', () => {
    component.counterNumber = 3;
    expect(component.isShowDecreaseButton).toBeTruthy();
  });

  it('should isShouldDecrease to be false when number < 0', () => {
    component.counterNumber = -1;
    expect(component.isShowDecreaseButton).toBeFalsy();
  });
});
