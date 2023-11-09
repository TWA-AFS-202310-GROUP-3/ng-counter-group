import { Component } from '@angular/core';

@Component({
  selector: 'app-counter-group',
  templateUrl: './counter-group.component.html',
  styleUrls: ['./counter-group.component.css']
})
export class CounterGroupComponent {
  counters: {num:number}[] = [ //prepare a list
  //父子组件还未传递的时候countergroup里面的变量影响不了counter的值
    {num:1},
    {num:2},
    {num:3}
  ] 

}
