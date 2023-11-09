import { Component } from '@angular/core';
import { CounterComponent } from '../counter/counter.component';
@Component({
  selector: 'app-counter-group',
  templateUrl: './counter-group.component.html',
  styleUrls: ['./counter-group.component.css']
})
export class CounterGroupComponent {
  counters: {num: number}[] = [
    {num: 1},
    {num: 2},
    {num: 3}
  ];
  
  get sum() {
    let sum_c = 0;
    this.counters.forEach(counter => {
      sum_c += counter.num
    })
    return sum_c;
    // return this.counters.reduce((result, current) => result + current.num, 0)
  }
}
