import { Component, Input } from '@angular/core';

@Component({
  selector: 'counter-group',
  templateUrl: './counter-group.component.html',
  styleUrls: ['./counter-group.component.css']
})
export class CounterGroupComponent {

  counters : {num: number}[] = [{num : 1}, {num : 1}];

  get sum() {
    return this.counters.reduce(
      (result, current) => result + current.num, 0
    )
  }
}
