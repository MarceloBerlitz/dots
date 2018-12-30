import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { GameComponent } from './game/game.component';
import { ConfigureComponent } from './configure/configure.component';

const routes: Routes = [
  {path: 'game', component: GameComponent},
  {path: '', component: ConfigureComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
