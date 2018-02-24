import { Equipment } from "./models/equipment";
import { EquipmentKind } from "./models/equipmentEnums";


export class EquipmentManager {
    
    constructor(private equipments:Equipment[]){ }

    addItem(item:Equipment){
        if(this.existItem(item.kind))return;
        this.equipments.push(item);        
    }

    removeItem(item: Equipment) {
        let index = this.equipments.indexOf(item);
        this.equipments.splice(index,1);
    }
    
    itemsScore():number{
        return this.equipments.filter(w=>!w.disable).reduce((p,c)=>{return p+c.bonus;},0);
    }

    private existItem(itemKind:EquipmentKind):boolean{        
        let match = this.findItemKind(itemKind);
        switch(itemKind){
            case EquipmentKind.ONE_HAND:{
                return !((match.length < 2 ) && !this.findItemKind(EquipmentKind.TWO_HAND)[0]);
            }                
            case EquipmentKind.TWO_HAND:{
                return !!(match[0] || this.findItemKind(EquipmentKind.ONE_HAND)[0]);
            }
            case EquipmentKind.RING:
                return false;
            default:
                return !!match[0];
        }        
    }

    private findItemKind(itemKind:EquipmentKind):Equipment[]{
        return this.equipments.filter((item)=>{return item.kind===itemKind;});
    }
}
