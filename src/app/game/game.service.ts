import { Injectable } from '@angular/core';
import { SidesModel } from './cel/model/sides.model';

@Injectable({
  providedIn: 'root'
})
export class GameService {

  constructor() { }

  private currentPlayer: string;

  private players: string[] = [];

  public getCurrentPlayer(): string {
    return this.currentPlayer;
  }

  public nextPlayer(): string {
    console.log('nextPlayer')
    this.currentPlayer = this.players.find(p => p != this.currentPlayer);
    return this.currentPlayer;
  }

  public setPlayers(players: string[] = []): void {
     this.players = this.players.concat(players);
     this.currentPlayer = this.players[this.getRandomIndex(this.players.length)];
  }

  public getMarkedNumber(matrix: SidesModel[][]): number {
    let counter = 0;
    matrix.forEach(line => {
      line.forEach(cel => {
        if(Object.keys(cel).every(prop => cel[prop] === true)) counter++;
      });
    });
    return counter;
  }

  private getRandomIndex(length: number): number {
    return Math.floor(Math.random() * length);
  }

}
