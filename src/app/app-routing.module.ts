import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Hijo1Component } from './hijo1/hijo1.component';
import { Hijo2Component } from './hijo2/hijo2.component';
import { Pagina404Component } from './pagina404/pagina404.component';
import { ParametrosComponent } from './parametros/parametros.component';
import { PrimerComponent } from './primer/primer.component';
import { SegundoComponent } from './segundo/segundo.component';


const routes: Routes = [
  { path: "primer-componente", component: PrimerComponent },
  {
    path: "segundo-componente", component: SegundoComponent,
    children: [
      { path: "hijo1", component: Hijo1Component },
      { path: "hijo2", component: Hijo2Component }
    ]
  },
  { path: "parametros-componente/:cadena", component: ParametrosComponent },
  { path: '', redirectTo: '/primer-componente', pathMatch: 'full' },
  { path: "**", component: Pagina404Component }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
