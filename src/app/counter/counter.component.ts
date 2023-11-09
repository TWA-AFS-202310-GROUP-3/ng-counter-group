import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.css']
})
export class CounterComponent {
  @Input() number = 0;
  @Input() id = 0;
  @Output() change = new EventEmitter();
  @Output() remove = new EventEmitter();
  @Output() reset = new EventEmitter();

  onIncreaseNumber(){
    this.number ++;
    this.change.emit(this.number);
  }

  onDecreaseNumber(){
    this.number --;
    this.change.emit(this.number);
  }

  onRemoveCounter(){
    this.remove.emit(this.id);
  }

  onResetCounter(){
    this.reset.emit(this.id);
  }
  
}
