import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Player } from '../models/player';
import { SelectListItem } from '../models/selectListItem';

@Component({
  selector: 'app-hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: ['./hero-detail.component.css']
})
export class HeroDetailComponent implements OnInit {
  @Input()player:Player;
  @Output()remove:EventEmitter<any> = new EventEmitter();
  heroRaces:SelectListItem[]=[
    new SelectListItem(1,"Człowiek"),
    new SelectListItem(2,"Elf"),
    new SelectListItem(3,"Krasnolud"),
    new SelectListItem(4,"Niziołek")];    
  heroClas:SelectListItem[]=[
    new SelectListItem(1,"Czarodziej"),
    new SelectListItem(2,"Kapłan"),
    new SelectListItem(3,"Wojownik"),
    new SelectListItem(4,"Złodziej"),
  ]
  eqPower:number=0;
  constructor() { }

  ngOnInit() {
    
  }
  itemBonus(bonus:number){
    this.eqPower=bonus;
  }

  delete(player:Player):void{
    this.remove.emit(player);
  }
}
