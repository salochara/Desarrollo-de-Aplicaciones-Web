import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { TituloComponent } from './titulo/titulo.component';
import { Titulo2Component } from './titulo2/titulo2.component';

@NgModule({
  declarations: [
    AppComponent,
    TituloComponent,
    Titulo2Component
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent] // el bootstrap es el que agarra el index.html.. ahroita solo ve el App Component...
  // ya del app.component.html se pueden importar mas componentes
})
export class AppModule { }
