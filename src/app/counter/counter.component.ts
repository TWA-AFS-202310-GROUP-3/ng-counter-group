import { Component } from '@angular/core';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.css']
})
export class CounterComponent {
  public number = 0;
  
  onIncreaseNumber() {
    this.number++;
  }

  onDecreaseNumber() {
    this.number--;
  }
}
