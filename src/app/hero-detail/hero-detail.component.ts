import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Player } from '../player';

@Component({
  selector: 'app-hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: ['./hero-detail.component.css']
})
export class HeroDetailComponent implements OnInit {
  @Input()player:Player;
  @Output()remove:EventEmitter<any> = new EventEmitter();
  constructor() { }

  ngOnInit() {
    
  }
  addEquipment(equipment:any){
    console.log(equipment);
  }
  delete(player:Player):void{
    this.remove.emit(player);
  }
}
