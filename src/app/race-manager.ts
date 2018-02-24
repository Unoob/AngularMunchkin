import {HeroRace, HeroClass} from "./models/heroEnums";

export class RaceManager {
    racesBonus = {};
    constructor() {
        this.racesBonus[HeroRace.CIMMERIAN] = [HeroClass.WARRIOR];
        this.racesBonus[HeroRace.CUSHITE] = [HeroClass.PRIEST];
        this.racesBonus[HeroRace.STYGIJCZYK] = [HeroClass.MAGE];
        this.racesBonus[HeroRace.ZAMORYJCZYK] = [HeroClass.ROUGE];
    }

    public CalculateBonusRace(race : HeroRace, heroClasses : Array<HeroClass>): number {
        let bonusClass: Array<HeroClass> = this.racesBonus[race]||[];
        let match: Array<HeroClass> = heroClasses.filter((heroClass) => {
            return bonusClass.includes(heroClass)
        });

        return match.length * 2;
    }
}