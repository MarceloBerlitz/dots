import { Injectable } from '@angular/core';

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

  private getRandomIndex(length: number): number {
    return Math.floor(Math.random() * length);
  }

}
