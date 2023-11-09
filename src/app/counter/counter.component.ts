import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.css']
})
export class CounterComponent {
  @Input() number = 0;
  @Output() change = new EventEmitter();


  onIncreaseNumber(){
    this.number ++;
    this.change.emit(this.number);
  }

  onDecreaseNumber(){
    this.number --;
    this.change.emit(this.number);
  }
  
}
