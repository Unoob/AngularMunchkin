import { EquipmentKind, EquipmentSize } from "./equipmentEnums";

export class Equipment{
    disable:boolean=false;
    constructor(
        public name:string,
        public price:number,
        public kind:EquipmentKind,
        public bonus:number=null,
        public size:EquipmentSize=EquipmentSize.SMALL){
    }
}