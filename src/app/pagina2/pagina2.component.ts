import { Component, OnInit } from '@angular/core';
import {FormsModule} from '@angular/forms';

@Component({
  selector: 'app-pagina2',
  templateUrl: './pagina2.component.html',
  styleUrls: ['./pagina2.component.css']
})
export class Pagina2Component implements OnInit {
  Nombre ='';
  Apellido='';
  showAlert () {
    window.alert("Te saludo con todo el gusto camarada: "+this.Nombre+" "+this.Apellido)
  }
  constructor() { }

  ngOnInit(): void {
  }

}
