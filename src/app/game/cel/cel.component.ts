import { Component, DoCheck, EventEmitter, Input, Output } from '@angular/core';

import { SidesModel } from './model/sides.model';
import { CelService } from './cel.service';
import { SidesChangeModel } from './model/sides-change.model';
import { SidesChangeBuilder } from './builder/sides-change-builder';

@Component({
  selector: 'app-cel',
  templateUrl: './cel.component.html',
  styleUrls: ['./cel.component.css']
})
export class CelComponent implements DoCheck {

  @Input()
  public rowIndex: number;

  @Input()
  public celIndex: number;

  public owner: string;

  @Input()
  public sides: SidesModel;

  @Output()
  public sidesChange: EventEmitter<SidesChangeModel> = new EventEmitter();

  constructor(
    private service: CelService
  ) { }

  ngDoCheck() {
    this.updateOwner();
  }

  public clicked(event: MouseEvent): void {
    this.updateSides(event);
    this.sidesChange.emit(this.getSidesChangeEvent());
  }

  private updateOwner(): void {
    if(!this.owner) this.owner = this.service.getOwner(this.sides);
  }

  private updateSides(event: MouseEvent): void {
    const newSides = this.service.getUpdatedSides(this.sides, event);
    if(!this.sides.equals(newSides)) {
      this.sides = newSides;
    }
  }

  private getSidesChangeEvent(): SidesChangeModel {
    return SidesChangeBuilder.get()
      .rowIndex(this.rowIndex)
      .celIndex(this.celIndex)
      .sides(this.sides)
      .build()
  }

}
