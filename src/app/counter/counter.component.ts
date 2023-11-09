import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.css']
})
export class CounterComponent {
  @Input() number = 0 //number被定义为可传递的属性
  //用@Input()把父组件counter list的值传进子组件，实现父到子的数据传递

  @Output() change = new EventEmitter() //子向父传事件，固定写法
  //change在这里只是一个变量名，在父组件html中调用同样变量名

  onIncrease() {
    this.number++
    this.change.emit(this.number) //可以用$event在父组件html中调用这个值
  }

  onDecrease() {
    this.number--
    this.change.emit(this.number)
  }

  resetCounter() {
    this.number=0
    this.change.emit(this.number)
  }

}
