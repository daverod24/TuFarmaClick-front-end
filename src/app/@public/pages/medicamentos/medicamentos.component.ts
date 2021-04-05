import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-medicamentos',
  templateUrl: './medicamentos.component.html',
  styleUrls: ['./medicamentos.component.scss']
})
export class MedicamentosComponent implements OnInit {

  listadoMedicamentos = [
    {nombre: 'Atamel', precio: 25},
    {nombre: 'Cetirizina', precio: 25},
    {nombre: 'Ibuprofeno', precio: 25},
    {nombre: 'Diclofenac', precio: 25},
    {nombre: 'Meloxican', precio: 25},
    {nombre: 'Losartan', precio: 25},
    {nombre: 'Furosemida', precio: 25},




  ]

  constructor() { }

  ngOnInit(): void {
  }

}
