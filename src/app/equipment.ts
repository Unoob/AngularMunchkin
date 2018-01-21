import { EquipmentKind, EquipmentSize } from "./equipmentEnums";

export class Equipment{
    constructor(
        public name:string,
        public price:number,
        public kind:EquipmentKind,
        public bonus:number=0,
        public size:EquipmentSize=EquipmentSize.SMALL){

    }
}