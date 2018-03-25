import { Equipment } from "./equipment";


export class Player {
    constructor(
        public name: string,
        public level: number = 1,
        public equipment: Equipment[] = []
    ) { }

    race: number[] = [];
    class: number[] = [];
    power: number = this.level;
}
