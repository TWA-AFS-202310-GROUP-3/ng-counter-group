import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CounterGroupComponent } from './counter-group.component';
import { CounterComponent } from '../counter/counter.component';


describe('CounterGroupComponent', () => {
  let component: CounterGroupComponent;
  let fixture: ComponentFixture<CounterGroupComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CounterGroupComponent, CounterComponent],
    });
    fixture = TestBed.createComponent(CounterGroupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should reset all number when call OnResetNumber', () => {
    component.counters = [{num: 1}, {num: 2}];
    component.onResetNumber();
    expect(component.counters).toEqual([{num: 0}, {num: 0}]);
  });

  it('should increase sum when num from counter increase', () => {
    component.counters = [{num: 1}, {num: 2}];
    component.counters[0].num++;
    expect(component.sum).toEqual(4);
  })

  it('should remove counter object from counters when call onRemoveCounter', () => {
    component.counters = [{num: 1}, {num: 2}];
    component.onRemoveCounter(0);
    expect(component.counters).toEqual([{num: 2}]);
  })

  it('should add counter object to counters when call onAddCounter', () => {
    component.counters = [{num: 1}, {num: 2}];
    component.onAddCounter();
    expect(component.counters).toEqual([{num: 1}, {num: 2}, {num: 0}]);
  })
});
