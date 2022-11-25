import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-parametros',
  templateUrl: './parametros.component.html',
  styleUrls: ['./parametros.component.css']
})
export class ParametrosComponent implements OnInit {
  cadena?: string
  constructor(private rutaActiva: ActivatedRoute) {}

  ngOnInit(): void {
    this.rutaActiva.params.subscribe((params) => {
      this.cadena = params['cadena'];
    })
  }
}
