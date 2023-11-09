import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.scss']
})

export class CounterComponent {
  @Input() counterNumber: number = 0;
  @Output() change = new EventEmitter();

  onIncrease(): void {
    this.counterNumber++;
    this.change.emit(this.counterNumber);
  }

  onDecrease(): void {
    this.counterNumber--;
    this.change.emit(this.counterNumber);
  }

  get isShowIncreaseButton(): boolean {
    return this.counterNumber <= 10;
  }

  get isShowDecreaseButton(): boolean {
    return this.counterNumber >= 0;
  }
}
