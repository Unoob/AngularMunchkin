import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Player } from '../models/player';
import { SelectListItem } from '../models/selectListItem';
import { HeroRace, HeroClas } from '../models/heroEnums';

@Component({
  selector: 'app-hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: ['./hero-detail.component.css']
})
export class HeroDetailComponent implements OnInit {
  @Input()player:Player;
  @Output()remove:EventEmitter<any> = new EventEmitter();
  heroRaces:SelectListItem[]=[
    new SelectListItem(HeroRace.ELF,"Elf"),
    new SelectListItem(HeroRace.DWARF,"Krasnolud"),
    new SelectListItem(HeroRace.HOBBIT,"Niziołek")
  ];    
  heroClas:SelectListItem[]=[
    new SelectListItem(HeroClas.MAGE,"Czarodziej"),
    new SelectListItem(HeroClas.PRIEST,"Kapłan"),
    new SelectListItem(HeroClas.WARRIOR,"Wojownik"),
    new SelectListItem(HeroClas.ROUGE,"Złodziej")
  ];
  eqPower:number=0;
  constructor() { }

  ngOnInit() {
    
  }
  onRaceChange(races:SelectListItem[]){
    console.log(races);
  }
  onClassChange(classes:SelectListItem[]){
    console.log(classes);
  }
  itemBonus(bonus:number){
    this.eqPower=bonus;
  }

  delete(player:Player):void{
    this.remove.emit(player);
  }
}
