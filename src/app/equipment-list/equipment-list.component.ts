import { Component, OnInit, Input } from '@angular/core';
import { EquipmentKind } from '../equipmentEnums';
import { Equipment } from '../equipment';

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
  constructor() { }

  ngOnInit() {
  }
  takeOfItem(item:Equipment){

    let index = this.playerEquipment.indexOf(item);
    this.playerEquipment.splice(index,1);
  }
  equipItem(item:any){
    if(!item)return;
    
    this.playerEquipment.push(new Equipment(item.name,0,item.value));
  }
}
