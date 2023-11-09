import { Component } from '@angular/core';

@Component({
  selector: 'counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.css']
})
export class CounterComponent {
  number = 0;

  onIncreaseNumber(){
    this.number ++;
  }

  onDecreaseNumber(){
    this.number --;
  }
}
