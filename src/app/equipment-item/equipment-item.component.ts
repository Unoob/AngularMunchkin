import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Equipment } from '../equipment';
import { Subject } from 'rxjs/Subject';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/debounceTime'; 
import 'rxjs/add/operator/distinctUntilChanged';

@Component({
  selector: 'app-equipment-item',
  templateUrl: './equipment-item.component.html',
  styleUrls: ['./equipment-item.component.css']
})
export class EquipmentItemComponent implements OnInit {

  @Input()item:Equipment;  
  @Output()takeOf:EventEmitter<Equipment> = new EventEmitter();
  @Output()onBonusChange:EventEmitter<number> = new EventEmitter();
  private bonus:Subject<number>;
  constructor() { }

  ngOnInit() {
  }

  takeOfItem(item:Equipment){
    console.log('takeOf')
    this.takeOf.emit(item);
  }
  
  bonusChange(bonus:number){
    if (!this.bonus) {
      Observable.create(observer => {
          this.bonus = observer;
      }).debounceTime(500) // wait 300ms after the last event before emitting last event
        .distinctUntilChanged() // only emit if value is different from previous value
        .subscribe(t=>{this.onBonusChange.emit(t)});
    }

    this.bonus.next(bonus);
  }
}
