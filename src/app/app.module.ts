import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SegundoComponent } from './segundo/segundo.component';
import { PrimerComponent } from './primer/primer.component';
import { Pagina404Component } from './pagina404/pagina404.component';
import { Hijo1Component } from './hijo1/hijo1.component';
import { Hijo2Component } from './hijo2/hijo2.component';
import { ParametrosComponent } from './parametros/parametros.component';

@NgModule({
  declarations: [
    AppComponent,
    SegundoComponent,
    PrimerComponent,
    Pagina404Component,
    Hijo1Component,
    Hijo2Component,
    ParametrosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
