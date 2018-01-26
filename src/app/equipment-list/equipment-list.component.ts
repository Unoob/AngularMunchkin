import { Component, OnInit, Input } from '@angular/core';
import { EquipmentKind } from '../equipmentEnums';
import { Equipment } from '../equipment';
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
    {value:EquipmentKind.NECK, name:'Naszyjnik'}
  ];
  selected:any;
  @Input()playerEquipment:Equipment[];
  eqManager:EquipmentManager;
  equipPower:number = 0;
  constructor() { }

  ngOnInit() {
    this.eqManager = new EquipmentManager(this.playerEquipment);
  }

  calculateItemScore():void{
    this.equipPower = this.eqManager.itemsScore();
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
