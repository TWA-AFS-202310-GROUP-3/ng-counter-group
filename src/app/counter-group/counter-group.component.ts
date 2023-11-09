import { Component, Input } from '@angular/core';

@Component({
  selector: 'counter-group',
  templateUrl: './counter-group.component.html',
  styleUrls: ['./counter-group.component.css']
})
export class CounterGroupComponent {

  counters : {num: number}[] = [];
}
