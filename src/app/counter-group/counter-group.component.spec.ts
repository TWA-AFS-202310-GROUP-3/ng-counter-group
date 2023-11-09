import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CounterGroupComponent } from './counter-group.component';

describe('CounterGroupComponent', () => {
  let component: CounterGroupComponent;
  let fixture: ComponentFixture<CounterGroupComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CounterGroupComponent]
    });
    fixture = TestBed.createComponent(CounterGroupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should return the sum 2 when given counter list with [{name : 1}, {name : 1}]', () => {
    component.counters = [{num : 1, id : 0}, {num : 1, id : 1}];

    expect(component.sum).toEqual(2);
  })

  it('should add new empty element into counters when click AddCounter', () => {
    let oldLength = component.counters.length;

    component.onAdd();

    expect(component.counters.length).toEqual(oldLength + 1);
    expect(component.counters[oldLength].num).toEqual(0);
  })

  it('should reset num to 0 for all counters when click reset button', () => {
    component.counters = [{num : 1, id : 0}, {num : 1, id : 1}];

    component.onReset();

    expect(component.counters[0].num).toEqual(0);
    expect(component.counters[1].num).toEqual(0);
  })


});
