import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CelComponent } from './cel/cel.component';
import { GameComponent } from './game.component';

@NgModule({
  declarations: [
    CelComponent,
    GameComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    GameComponent
  ]
})
export class Game { }
