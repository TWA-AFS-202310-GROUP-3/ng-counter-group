import { Component, Input } from '@angular/core';

export interface counterData {
  num : number,
  id : number
}

@Component({
  selector: 'counter-group',
  templateUrl: './counter-group.component.html',
  styleUrls: ['./counter-group.component.css']
})
export class CounterGroupComponent {

  counters : counterData[] = [];

  counterID = 0;

  get sum() {
    return this.counters.reduce(
      (result, current) => result + current.num, 0
    )
  }

  onAdd(){
    this.counters.push({num : 0, id : this.counterID})
    this.counterID ++;
  }

  onReset(){
    this.counters.forEach(counter => {
      counter.num = 0;
    });
  }

  RemoveCounterWithIndex(id : number){
    this.counters.forEach((counterData, index) => {
      if (counterData.id == id) {
        this.counters.splice(index, 1)
      }
    })
  }

  ResetCounterWithIndex(id : number){
    this.counters.forEach(counter => {
      if (counter.id == id) {
        counter.num = 0;
      }
    })
  }
}
