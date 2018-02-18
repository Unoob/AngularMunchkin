import {HeroRace, HeroClass} from "./models/heroEnums";

export class RaceManager {
    racesBonus = {};
    constructor() {
        this.racesBonus[HeroRace.DWARF] = [HeroClass.ROUGE, HeroClass.WARRIOR];
        this.racesBonus[HeroRace.HOBBIT] = [HeroClass.ROUGE];
        this.racesBonus[HeroRace.ELF] = [HeroClass.PRIEST,HeroClass.MAGE];
    }

    public CalculateBonusRace(race : HeroRace, heroClasses : Array<HeroClass>): number {
        let bonusClass: Array<HeroClass> = this.racesBonus[race]||[];
        let match: Array<HeroClass> = heroClasses.filter((heroClass) => {
            return bonusClass.includes(heroClass)
        });

        return match.length * 2;
    }
}