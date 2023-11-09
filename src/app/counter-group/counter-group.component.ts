import { Component } from '@angular/core';

@Component({
  selector: 'app-counter-group',
  templateUrl: './counter-group.component.html',
  styleUrls: ['./counter-group.component.scss']
})
export class CounterGroupComponent {
  public sum: Number = 0;
  public counters: { num: Number }[] = [
    { num: 1 },
    { num: 2 },
    { num: 3 }
  ];

  onCreateCounter(): void {

  }

}
