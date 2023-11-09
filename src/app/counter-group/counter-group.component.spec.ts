import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CounterGroupComponent } from './counter-group.component';
import { CounterComponent } from './counter/counter.component';

describe('CounterGroupComponent', () => {
  let component: CounterGroupComponent;
  let fixture: ComponentFixture<CounterGroupComponent>;
  let firstCounterId: string;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CounterGroupComponent, CounterComponent]
    })
      .compileComponents();

    fixture = TestBed.createComponent(CounterGroupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();

    for (let i = 0; i < 5; i++) {
      component.onCreateCounter();
    }
    firstCounterId = component.counters[0].id;
  });


  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should create new counter when onCreateCounter', () => {
    component.onCreateCounter();
    expect(component.counters.length).toEqual(6);
  });

  it('should delete a counter when onDeleteCounter when given valid id', () => {
    component.onDeleteCounter(firstCounterId);
    expect(component.counters.length).toEqual(4);
  });

  it('should not delete a counter when onDeleteCounter when given invalid id', () => {
    component.onDeleteCounter('12345');
    expect(component.counters.length).toEqual(5);
  });

  it(`should calculate sum of counter's sum when counterSum`, () => {
    component.counters.forEach(c => c.num = 10);
    expect(component.counterSum).toEqual(50);
  });

  it('should reset all counter when onResetAll', () => {
    component.counters.forEach(c => c.num = 10);
    component.onReset();
    expect(component.counterSum).toEqual(0);
    component.counters.forEach(counter => [
      expect(counter.num).toEqual(0)
    ]);
  });
});
