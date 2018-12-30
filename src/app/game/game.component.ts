import { Component, DoCheck, OnInit } from '@angular/core';
import { SidesModel } from './cel/model/sides.model';
import { SidesChangeModel } from './cel/model/sides-change.model';
import { ActivatedRoute } from '@angular/router';
import { GameService } from './game.service';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.css']
})
export class GameComponent implements OnInit, DoCheck{


  private width: number = 20;

  private height: number = 10;

  public stateMatrix: SidesModel[][] = [];

  private markedNumber: number = 0;

  public winner: string = null;

  constructor(
    private activatedRoute: ActivatedRoute,
    private gameService: GameService
  ) { }

  ngOnInit() {
    const queryParams = this.activatedRoute.snapshot.queryParams;
    this.width = queryParams['cols'];
    this.height = queryParams['lines'];
    this.gameService.setPlayers([queryParams['player1'], queryParams['player2']]);
    this.initializeStateMatrix();
  }

  ngDoCheck(): void {
    const currentMarked = this.gameService.getMarkedNumber(this.stateMatrix);
    if(this.markedNumber < currentMarked) this.markedNumber = currentMarked;
    else this.gameService.nextPlayer();
    if(this.markedNumber === this.width * this.height) {
      alert('fim de jogo')
    }
  }

  public updateOtherCels(event): void {
    this.updateStateMatrix(event);
  }

  private initializeStateMatrix(): void {
    for(let i = 0; i < this.height; i++){
      for(let t = 0; t < this.width; t++) {
        if(!this.stateMatrix[i]) this.stateMatrix[i] = [];
        this.stateMatrix[i].push(new SidesModel());
      }
    }
  }

  public updateStateMatrix(sidesChange: SidesChangeModel): void {
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
