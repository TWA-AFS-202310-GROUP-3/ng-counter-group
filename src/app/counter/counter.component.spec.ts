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

  it('should increase number when call OnIncrease', ()=>{
    component.number = 2
    component.onIncrease()
    expect(component.number).toEqual(3)
  })

  it('should decrease number when call OnDecrease', ()=>{
    component.number = 2
    component.onDecrease()
    expect(component.number).toEqual(1)
  })

  it('should reset number when call OnResetOneCounter', ()=>{
    component.number = 2
    component.onResetOneCounter()
    expect(component.number).toEqual(0)
  })
});
