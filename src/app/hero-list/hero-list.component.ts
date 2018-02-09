import { Component, OnInit } from '@angular/core';
import { Player } from '../models/player';

@Component({
  selector: 'app-hero-list',
  templateUrl: './hero-list.component.html',
  styleUrls: ['./hero-list.component.css']
})
export class HeroListComponent implements OnInit {
  //private tmp = new Player('player 1');
  current:Player;
  players:Player[]=[];
  constructor() {
    //this.players=[this.tmp];
   }

  ngOnInit() {
  }

  add(name:string){
    name = name.trim();
    if(!name)return;
    
    this.players.push(new Player(name));

    if(!this.current){
      this.current=this.players[0];
    }
  }
  remove(player:Player){
    this.players = this.players.filter(p=>p!=player);
  }
}
