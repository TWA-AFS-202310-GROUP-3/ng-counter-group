import { Component } from '@angular/core';

@Component({
  selector: 'app-counter-group',
  templateUrl: './counter-group.component.html',
  styleUrls: ['./counter-group.component.scss']
})
export class CounterGroupComponent {
  public counters: { num: number }[] =
    [
      { num: 1 },
      { num: 2 },
      { num: 3 }
    ];

  onCreateCounter(): void {
    this.counters.push({num:0});
  }

  get counterSum(): number {
    return this.counters.reduce((sum, counter) => sum + counter.num, 0);
  }

}
