import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { ConfigureComponent } from './configure.component';

@NgModule({
  declarations: [
    ConfigureComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule
  ],
  exports: [
    ConfigureComponent
  ]
})
export class ConfigureModule { }
