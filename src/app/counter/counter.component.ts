import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.css']
})
export class CounterComponent {
  @Input() number = 0
  @Input() id?: number
  @Output() change = new EventEmitter()
  @Output() remove = new EventEmitter<number>()

  OnIncrease(){
    this.number++
    this.change.emit(this.number)
  }

  OnDecrease(){
    this.number--
    this.change.emit(this.number)
  }

  OnReset(){
    this.number = 0
    this.change.emit(this.number)
  }

  OnRemove(){
    this.remove.emit(this.id)
  }
}
