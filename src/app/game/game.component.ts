import { Component, Input, OnInit } from '@angular/core';
import { SidesModel } from './cel/model/sides.model';
import { SidesChangeModel } from './cel/model/sides-change.model';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.css']
})
export class GameComponent implements OnInit {

  @Input()
  public sideSize: number = 5;

  public stateMatrix: SidesModel[][] = [];

  constructor() { }

  ngOnInit() {
    this.initializeStateMatrix();
  }

  public updateOtherCels(event): void {
    this.updateStateMatrix(event);
  }

  private initializeStateMatrix(): void {
    for(let i = 0; i < this.sideSize; i++){
      for(let t = 0; t < this.sideSize; t++) {
        if(!this.stateMatrix[i]) this.stateMatrix[i] = [];
        this.stateMatrix[i].push(new SidesModel());
      }
    }
    console.log(this.stateMatrix)
  }

  public updateStateMatrix(sidesChange: SidesChangeModel): void {
    console.log(sidesChange);
    this.stateMatrix[sidesChange.rowIndex][sidesChange.celIndex] = sidesChange.sides;
      if (this.stateMatrix[sidesChange.rowIndex + 1]) {
        this.stateMatrix[sidesChange.rowIndex + 1][sidesChange.celIndex].top = sidesChange.sides.bottom;
      }
      if (this.stateMatrix[sidesChange.rowIndex][sidesChange.celIndex - 1]) {
        this.stateMatrix[sidesChange.rowIndex][sidesChange.celIndex - 1].right = sidesChange.sides.left;
      }
      if (this.stateMatrix[sidesChange.rowIndex][sidesChange.celIndex + 1]) {
        this.stateMatrix[sidesChange.rowIndex][sidesChange.celIndex + 1].left = sidesChange.sides.right;
      }
      if (this.stateMatrix[sidesChange.rowIndex - 1]) {
        this.stateMatrix[sidesChange.rowIndex - 1][sidesChange.celIndex].bottom = sidesChange.sides.top;
      }
  }
}
