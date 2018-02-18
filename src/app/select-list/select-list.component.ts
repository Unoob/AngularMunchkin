import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { SelectListItem } from '../models/selectListItem';

class SelectItem extends SelectListItem{
  constructor(value:any,text:string){
    super(value,text);
  }
  disable:boolean=false;
}

@Component({
  selector: 'app-select-list',
  templateUrl: './select-list.component.html',
  styleUrls: ['./select-list.component.css']
})
export class SelectListComponent implements OnInit {
  @Input()options:SelectListItem[]=[];
  @Input()maxSelect;
  @Input()placeholder;
  @Output()onSelect=new EventEmitter<SelectListItem[]>();
  data:SelectItem[]=[];
  selected:SelectListItem[]=[];
  constructor() {
  }

  ngOnInit() {
    this.data = this.options.map(function(item){return new SelectItem(item.value,item.text);});
  }

  onSelectChange(value:SelectItem[]){
    this.toggleAvailable(this.getUnselected(value),value.length===this.maxSelect);
    this.selected = value.map((i) => {return new SelectListItem(i.value,i.text)});
  }
  
  onOpenedChange($event:boolean){
    if(!$event){
      this.onSelect.emit(this.selected);
    }
  }

  private getUnselected(selected:SelectItem[]):SelectItem[]{
    return this.data.filter(f=>selected.indexOf(f)<0);
  }
  private toggleAvailable(toggleOn:SelectItem[],disable:boolean){
    toggleOn.forEach(i=>i.disable=disable);
  }
}