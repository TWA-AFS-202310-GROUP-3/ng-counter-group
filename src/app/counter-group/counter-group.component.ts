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
}
