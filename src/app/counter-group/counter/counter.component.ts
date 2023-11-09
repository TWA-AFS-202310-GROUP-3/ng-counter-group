import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.scss']
})

export class CounterComponent {
  @Input() counterNumber: number = 0;

  onIncrease(): void {
    this.counterNumber++;
  }

  onDecrease(): void {
    this.counterNumber--;
  }

  get isShowIncreaseButton(): boolean {
    return this.counterNumber <= 10;
  }

  get isShowDecreaseButton(): boolean {
    return this.counterNumber >= 0;
  }
}
