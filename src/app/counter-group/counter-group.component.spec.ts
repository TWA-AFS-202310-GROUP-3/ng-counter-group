import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CounterGroupComponent } from './counter-group.component';
import { CounterComponent} from '../counter/counter.component';
/*import的時候把路徑向上走一層，加兩個點 */

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

  it('should add a counter when call onAdd', ()=>{
    component.counters = [{num:1}]
    component.onAdd()
    expect(component.counters).toEqual([{num:1},{num:0}])
  })

  it('should remove a counter when call onDelete', ()=>{
    component.counters = [{num:1},{num:0}]
    component.onDelete(0)
    expect(component.counters).toEqual([{num:0}])
  })

  it('should reset all counters and reset sum when call onResetAll', ()=>{
    component.counters = [{num:7},{num:7}]
    component.onResetAll()
    component.counters.forEach(element => 
      expect(element.num).toEqual(0))
    expect(component.sum).toEqual(0)
  })

});
