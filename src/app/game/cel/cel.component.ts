import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { CelTypesEnum } from './cel-types.enum';
import { SidesModel } from './model/sides.model';

@Component({
  selector: 'app-cel',
  templateUrl: './cel.component.html',
  styleUrls: ['./cel.component.css']
})
export class CelComponent implements OnInit {

  @Input()
  public celType: CelTypesEnum = CelTypesEnum.DEFAULT;

  public owner: string;

  @Input()
  public sides = new SidesModel();

  @Output()
  public sidesChange: EventEmitter<SidesModel> = new EventEmitter();

  constructor() { }

  ngOnInit() {
    if(this.celType == CelTypesEnum.DEFAULT) {

    }
  }

  public clicked(event: MouseEvent) {
    console.log(event);
      Object.keys(this.sides).forEach(prop => {
        console.log(prop);
        if(!this.sides[prop]) {
          this.sides[prop] = event.srcElement.classList.contains(prop) ? true : this.sides[prop];
        }
      });
      if(Object.keys(this.sides).every(prop => this.sides[prop] === true)) this.owner = 'M';
      this.sidesChange.emit(this.sides);
    console.log(this.sides);
  }

}
