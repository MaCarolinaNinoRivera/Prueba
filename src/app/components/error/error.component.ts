import { Component } from '@angular/core';

@Component({
  selector: 'mi-error',
  templateUrl: './error.component.html',
  styleUrls: ['./error.component.css']
})
export class ErrorComponent {
  constructor(){
    console.log("Mi componente cargado");

  }
}
