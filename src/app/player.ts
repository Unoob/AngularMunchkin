
export class Player{
    constructor(public name:string, public level:number=1){
    }
    race:number;
    class:number;

    equipment:Equipment=new Equipment();

    totalScore():number{
        return this.level + this.equipment.score();
    }
}
class Equipment{
    constructor(
        
    ){}
    helmet:number;
    chest:number;
    glowes:number;
    mainHand:number;
    offHand:number;
    legs:number;
    shoes:number;
    ring:number;
    neckler:number
    score():number{
        return this.parse(this.helmet)
        +this.parse(this.chest)
        +this.parse(this.glowes)
        +this.parse(this.legs)
        +this.parse(this.mainHand)
        +this.parse(this.offHand)
        +this.parse(this.ring)
        +this.parse(this.shoes);
    }
    private parse(val:number):number{
        return ((+val)||0);
    }
}