import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Player } from '../models/player';

@Component({
  selector: 'app-hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: ['./hero-detail.component.css']
})
export class HeroDetailComponent implements OnInit {
  @Input()player:Player;
  @Output()remove:EventEmitter<any> = new EventEmitter();
  
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
