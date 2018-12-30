import { Injectable } from '@angular/core';

import { SidesModel } from './model/sides.model';
import { GameService } from '../game.service';

@Injectable({
  providedIn: 'root'
})
export class CelService {

  constructor(
    private gameService: GameService
  ) { }

  public getUpdatedSides(sides: SidesModel, event: MouseEvent): SidesModel {
    const newSides = Object.assign(sides);
    Object.keys(newSides).forEach(prop => {
      if(!newSides[prop]) {
        newSides[prop] = event.srcElement.classList.contains(prop) ? true : newSides[prop];
      }
    });
    return newSides;
  }

  private hasOwner(sides: SidesModel): boolean {
    return Object.keys(sides).every(prop => sides[prop] === true);
  }

  public getOwner(sides: SidesModel): string {
    if(this.hasOwner(sides)) return this.gameService.getCurrentPlayer();
  }

}
