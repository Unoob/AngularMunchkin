import { Component, OnInit, Input } from '@angular/core';
import { Player } from '../models/player';

enum FightResult{
  WIN,LOSE,TIE
}
@Component({
  selector: 'app-monster-fight',
  templateUrl: './monster-fight.component.html',
  styleUrls: ['./monster-fight.component.css']
})
export class MonsterFightComponent implements OnInit {
  @Input()player:Player;
  monster:number;
  monsterModify:number;
  playerModify:number;
  constructor() { }

  ngOnInit() {
  }
  private fightResult():FightResult{
    let monster = (+this.monster) + (+this.monsterModify||0);
    let player = this.player.totalScore() + (+this.playerModify||0);
    console.log(monster);
    if(player === monster){
      return FightResult.TIE;
    }
    return player > monster ? FightResult.WIN : FightResult.LOSE;
  }
  duel():string{
    console.log('duel')
    return this.fightResult()+'';
  }

  defeat(){
    if(this.fightResult()!==FightResult.WIN)return;
    this.player.level++;

  }
}
