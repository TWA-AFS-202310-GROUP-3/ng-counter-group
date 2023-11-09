import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.scss']
})

export class CounterComponent {
  @Input() counterNumber: number = 0;
  @Input() counterId: string = "";
  @Output() valueChange = new EventEmitter();
  @Output() visibleChange = new EventEmitter();

  onIncrease(): void {
    this.counterNumber++;
    this.valueChange.emit(this.counterNumber);
  }

  onDecrease(): void {
    this.counterNumber--;
    this.valueChange.emit(this.counterNumber);
  }

  onReset(): void {
    this.counterNumber = 0;
    this.valueChange.emit(this.counterNumber);
  }
  onDelete(): void {
    console.log("remove counter id", this.counterId);
    this.visibleChange.emit(this.counterId);
  }

  get isShowIncreaseButton(): boolean {
    return this.counterNumber <= 10;
  }

  get isShowDecreaseButton(): boolean {
    return this.counterNumber >= 0;
  }
}
