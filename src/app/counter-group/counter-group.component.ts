import { Component } from '@angular/core';

@Component({
  selector: 'app-counter-group',
  templateUrl: './counter-group.component.html',
  styleUrls: ['./counter-group.component.scss']
})
export class CounterGroupComponent {
  public sum: number = 0;
  public counters: { num: number }[] =
    [
      { num: 1 },
      { num: 2 },
      { num: 3 }
    ];

  onCreateCounter(): void {

  }

}
