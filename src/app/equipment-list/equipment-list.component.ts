import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { EquipmentKind } from '../models/equipmentEnums';
import { Equipment } from '../models/equipment';
import { EquipmentManager } from '../equipment-manager';

@Component({
  selector: 'app-equipment-list',
  templateUrl: './equipment-list.component.html',
  styleUrls: ['./equipment-list.component.css']
})
export class EquipmentListComponent implements OnInit {
  equipments:any[]=[
    {value:EquipmentKind.ONE_HAND, name:'Broń 1-ręczna'},
    {value:EquipmentKind.TWO_HAND, name:'Broń 2-ręczna'},
    {value:EquipmentKind.CHEST, name:'Zbroja'},
    {value:EquipmentKind.HEAD, name:'Hełm'},
    {value:EquipmentKind.BOOTS, name:'Buty'},
    {value:EquipmentKind.RING, name:'Pierścień'},
    {value:EquipmentKind.NECK, name:'Naszyjnik'},
    {value:EquipmentKind.COMPANION, name:'Towarzysz'}
  ];
  selected:any;
  @Input()playerEquipment:Equipment[];
  @Output()onBonusChange = new EventEmitter<number>();
  eqManager:EquipmentManager;
  constructor() { }

  ngOnInit() {
    this.eqManager = new EquipmentManager(this.playerEquipment);
  }

  calculateItemScore():void{
    this.onBonusChange.emit(this.eqManager.itemsScore())
  }

  takeOfItem(item:Equipment){
    this.eqManager.removeItem(item);
    this.calculateItemScore();
  }

  equipItem(item:any){
    if(!item)return;
    this.eqManager.addItem(new Equipment(item.name,0,item.value));
  }
}
