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
  @Input() player: Player;
  @Output() remove: EventEmitter<any> = new EventEmitter();
  raceBonusManager: RaceManager;
  heroRaces: SelectListItem[] = [
    new SelectListItem(HeroRace.ZAMORYJCZYK, "Zamoryjczyk"),
    new SelectListItem(HeroRace.CIMMERIAN, "Cymeryjczyk"),
    new SelectListItem(HeroRace.CUSHITE, "Kuszyta"),
    new SelectListItem(HeroRace.STYGIJCZYK, "Stygijczyk")
  ];
  heroClasses: SelectListItem[] = [
    new SelectListItem(HeroClass.MAGE, "Czarodziej"),
    new SelectListItem(HeroClass.PRIEST, "Kapłan"),
    new SelectListItem(HeroClass.WARRIOR, "Wojownik"),
    new SelectListItem(HeroClass.ROUGE, "Złodziej")
  ];
  eqPower: number = 0;
  raceBonus: number = 0;

  constructor() {
    this.raceBonusManager = new RaceManager();
  }

  ngOnInit() {
  }
  onRaceChange(races: SelectListItem[]) {
    //console.log(races);
    this.player.race = races.map(r => r.value);
    this.calculateCurrentRaceBonus();
  }

  onClassChange(classes: SelectListItem[]) {
    //console.log(classes);
    this.player.class = classes.map(c => c.value);
    this.calculateCurrentRaceBonus();
  }
  itemBonus(bonus: number) {
    this.eqPower = bonus;
  }

  delete(player: Player): void {
    this.remove.emit(player);
  }

  changeLevel(player: Player, change: number) {
    let p = player.level;
    let l = p += (+change);
    if (l < 1) return;
    if (l > 10) return;
    player.level = l;
  }

  get CurrentPower(): number {
    this.player.power = this.player.level + this.eqPower + this.raceBonus;
    return this.player.power;
  }

  private calculateCurrentRaceBonus() {
    this.raceBonus = 0;
    for (let i = 0; i < this.player.race.length; i++) {
      this.raceBonus += this.raceBonusManager.CalculateBonusRace(this.player.race[i], this.player.class);
    }
  }
}
