import { Component } from '@angular/core';
import { v4 } from 'uuid';

export interface Counter {
  id: string;
  num: number,
  visible: boolean

}

@Component({
  selector: 'app-counter-group',
  templateUrl: './counter-group.component.html',
  styleUrls: ['./counter-group.component.scss']
})
export class CounterGroupComponent {
  public counters: Counter[] = [];

  onCreateCounter(): void {
    this.counters.push(
      {
        id: v4(),
        num: 0,
        visible: true
      });
    console.log(this.counters);
  }

  onReset(): void {
    this.counters.forEach(counter => counter.num = 0);
  }

  onDeleteCounter(counterId: string): void {
    this.counters.forEach((counter, index) => {
      if (counter.id === counterId) this.counters.splice(index, 1);
    });
  }

  get counterSum(): number {
    return this.counters.reduce((sum, counter) => sum + counter.num, 0);
  }

}
