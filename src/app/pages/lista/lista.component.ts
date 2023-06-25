import { Component } from '@angular/core';
import { ServiceService } from 'src/app/services/service.service';

@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html',
  styleUrls: ['./lista.component.css']
})
export class ListaComponent {
  productosList: any[] = [];

  constructor(private servicio:ServiceService) {}

  ngOnInit():void {
    this.servicio.getProductos().subscribe
    ((data:any)=>{
      this.productosList = [...data]
    })
  }
}
