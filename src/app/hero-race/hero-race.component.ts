import { Component, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-hero-race',
  templateUrl: './hero-race.component.html',
  styleUrls: ['./hero-race.component.css']
})
export class HeroRaceComponent implements OnInit {
  raceList:any[]=[
    {value:1,text:'Elf', disable:false},
    {value:2,text:'Niziołek', disable:false},
    {value:3,text:'Krasnolud', disable:false}
  ]
  selected:any[] = [];
  onSelect(value:any){
    console.log(value);
    this.raceList.filter(f=>value.indexOf(f)<0).forEach(i=>i.disable=(value.length===2));
    this.selected=value;
  }

  constructor() { }

  ngOnInit() {
  }

}
