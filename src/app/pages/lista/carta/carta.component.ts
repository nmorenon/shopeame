import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ServiceService } from 'src/app/services/service.service';

@Component({
  selector: 'app-carta',
  templateUrl: './carta.component.html',
  styleUrls: ['./carta.component.css']
})
export class CartaComponent {
  id!:number;
  producto!:any;
  constructor(private servicio:ServiceService, private activatedRoute:ActivatedRoute, private router:Router){}
  ngOnInit():void{
    this.activatedRoute.paramMap.subscribe(params=> {
      this.id = Number(params.get("id"))
    });
    this.servicio.getProducto(this.id).subscribe((data:any)=>{
      this.producto=data;
    });
  }
  deleteProducto (){
    this.servicio.deleteProducto(this.id).subscribe((data:any)=>{
      alert("Producto Borrado")
      this.router.navigate(["lista"])
    })
  }
}
