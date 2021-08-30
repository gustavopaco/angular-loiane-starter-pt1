import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import {HttpClientModule} from "@angular/common/http";
import {FormsModule} from "@angular/forms";
import {CursosModule} from "./cursos/cursos.module";

import {MeuPrimeiroComponent} from "./meu-primeiro/meu-primeiro.component";
import { MeuPrimeiro2Component } from './meu-primeiro2/meu-primeiro2.component';

@NgModule({
    declarations: [
        AppComponent,
        MeuPrimeiroComponent,
        MeuPrimeiro2Component
    ],
  imports: [
    CursosModule,
    FormsModule,
    HttpClientModule,
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
