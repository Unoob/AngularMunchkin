import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Player } from '../models/player';
import { SelectListItem } from '../models/selectListItem';
import { HeroRace, HeroClass } from '../models/heroEnums';
import { RaceManager } from '../race-manager';

@Component({
  selector: 'app-hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: ['./hero-detail.component.css']
})
export class HeroDetailComponent implements OnInit {
  @Input()player:Player;
  @Output()remove:EventEmitter<any> = new EventEmitter();
  raceBonusManager:RaceManager;
  heroRaces:SelectListItem[]=[
    new SelectListItem(HeroRace.ELF,"Elf"),
    new SelectListItem(HeroRace.DWARF,"Krasnolud"),
    new SelectListItem(HeroRace.HOBBIT,"Niziołek")
  ];    
  heroClas:SelectListItem[]=[
    new SelectListItem(HeroClass.MAGE,"Czarodziej"),
    new SelectListItem(HeroClass.PRIEST,"Kapłan"),
    new SelectListItem(HeroClass.WARRIOR,"Wojownik"),
    new SelectListItem(HeroClass.ROUGE,"Złodziej")
  ];
  eqPower:number=0;
  raceBonus:number=0;
  heroRace:Array<HeroRace>=[];
  heroClasses:Array<HeroClass>=[];
  constructor() {
    this.raceBonusManager = new RaceManager();
   }

  ngOnInit() {
    
  }
  onRaceChange(races:SelectListItem[]){
    //console.log(races);
    this.heroRace = races.map(r=>r.value);    
    this.calculateCurrentRaceBonus();
    
  }
  onClassChange(classes:SelectListItem[]){
    //console.log(classes);
    this.heroClasses = classes.map(c=>c.value);
    this.calculateCurrentRaceBonus();
  }
  itemBonus(bonus:number){
    this.eqPower=bonus;
  }

  delete(player:Player):void{
    this.remove.emit(player);
  }

  private calculateCurrentRaceBonus(){
    this.raceBonus=0;
    for(let i =0;i<this.heroRace.length;i++){
      this.raceBonus += this.raceBonusManager.CalculateBonusRace(this.heroRace[i],this.heroClasses);
    }
  }
}
