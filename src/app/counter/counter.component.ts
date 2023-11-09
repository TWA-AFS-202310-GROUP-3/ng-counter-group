import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.css']
})
export class CounterComponent {
  @Input() number = 0 //number被定义为可传递的属性
  //用@Input()把父组件counter list的值传进子组件，实现父到子的数据传递
  onIncrease() {
    this.number++
  }

  onDecrease() {
    this.number--
  }

}
