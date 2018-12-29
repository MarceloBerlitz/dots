import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GameService {

  constructor() { }

  private currentPlayer: string = 'M';

  public getCurrentPlayer(): string {
    return this.currentPlayer;
  }

}
