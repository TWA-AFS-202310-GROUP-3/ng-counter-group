import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CounterGroupComponent } from './counter-group.component';
import { CounterComponent } from '../counter/counter.component';

describe('CounterGroupComponent', () => {
  let component: CounterGroupComponent;
  let fixture: ComponentFixture<CounterGroupComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CounterGroupComponent, CounterComponent]
    });
    fixture = TestBed.createComponent(CounterGroupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should return sum when give a counter list', () => {
    counters: {num : Number}[] = [
      {num: 1},
      {num: 2},
      {num: 3}
    ]
    expect(component.sum).toEqual(6)
  });

  it('should return add success when call onAdd', () => {
    counters: {num : Number}[] = [
      {num: 1},
      {num: 2},
      {num: 3}
    ]
    component.OnAdd()
    expect(component.counters.length).toEqual(4)
  });

  it('should remove counters when call OnResetCounters', () => {
    counters: {num : Number}[] = [
      {num: 1},
      {num: 2},
      {num: 3}
    ]
    component.removeCounter(1)
    expect(component.counters.length).toEqual(2)
  });
});
