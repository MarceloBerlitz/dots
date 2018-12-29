import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CelComponent } from './cel/cel.component';

@NgModule({
  declarations: [
    CelComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    CelComponent
  ]
})
export class Game { }
