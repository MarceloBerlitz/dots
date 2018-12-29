import { Component, DoCheck, EventEmitter, Input, OnInit, Output } from '@angular/core';

import { SidesModel } from './model/sides.model';
import { CelService } from './cel.service';
import { SidesChangeModel } from './model/sides-change.model';
import { SidesChangeBuilder } from './builder/sides-change-builder';

@Component({
  selector: 'app-cel',
  templateUrl: './cel.component.html',
  styleUrls: ['./cel.component.css']
})
export class CelComponent implements OnInit, DoCheck {

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

  ngOnInit() { }

  ngDoCheck() {
    this.updateOwner();
  }

  public clicked(event: MouseEvent) {
    this.updateSides(event);
    this.updateOwner();
    this.sidesChange.emit(this.getSidesChangeEvent());
  }

  private updateOwner(): void {
    this.owner = this.service.getOwner(this.sides)
  }

  private updateSides(event: MouseEvent): void {
    this.sides = this.service.getUpdatedSides(this.sides, event);
  }

  private getSidesChangeEvent(): SidesChangeModel {
    return SidesChangeBuilder.get()
      .rowIndex(this.rowIndex)
      .celIndex(this.celIndex)
      .sides(this.sides)
      .build()
  }

}
