import { Component } from '@angular/core';

@Component({
  selector: 'app-counter-group',
  templateUrl: './counter-group.component.html',
  styleUrls: ['./counter-group.component.css']
})
export class CounterGroupComponent {
  counters: { num: number }[] = [ //prepare a list
    //父子组件还未传递的时候countergroup里面的变量影响不了counter的值
    { num: 1 },
    { num: 2 },
    { num: 3 }
  ]
  get sum() { //get将sum定义成属性(attribute)，不是method
    return this.counters.reduce(
      (result, current) => result + current.num, 0
    ) //0 here is the initial value of sum, then +num1=result, +num2=result to get the sum of all items in a list
  }

  onAdd() {
    this.counters.push({ num: 0 }) //.push() will add an item in list
  }

  removeCounter(index: number) {
    this.counters.splice(index, 1);
  }

  resetSum() {
    this.counters = []
  }

}
