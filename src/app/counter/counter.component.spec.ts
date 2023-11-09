import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CounterComponent } from './counter.component';
import { CounterGroupComponent } from '../counter-group/counter-group.component';

describe('CounterComponent', () => {
  let component: CounterComponent;
  let fixture: ComponentFixture<CounterComponent>;
  //let groupComponent : CounterGroupComponent;
  //let fixtureGroupComponent : ComponentFixture<CounterGroupComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CounterComponent, CounterGroupComponent]
    });
    fixture = TestBed.createComponent(CounterComponent);
    //fixtureGroupComponent = TestBed.createComponent(CounterGroupComponent);
    component = fixture.componentInstance;
    //groupComponent = fixtureGroupComponent.componentInstance;
    fixture.detectChanges();
    //fixtureGroupComponent.detectChanges();
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

  it('should be deleted when click the remove button', () => {
    component.onRemoveCounter();

    expect(component).toBeFalsy();
  })


});
