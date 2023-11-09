import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.css']
})
export class CounterComponent {
  @Input() number = 0     /* @Input 标记number是可以被外界设置的 */
  @Output() change = new EventEmitter()   /* @Output 标记change是向外发射的事件 */
  /* 在html里，(change)="counter.num = $event",其中$event的值就是change发出来的 */
 
  onIncrease(){
    this.number ++
    this.change.emit(this.number)
  }
  onDecrease(){
    this.number --
    this.change.emit(this.number)
  }
  onResetOneCounter(){
    this.number = 0
    this.change.emit(this.number)
  }
}
