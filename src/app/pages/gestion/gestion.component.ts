import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ServiceService } from 'src/app/services/service.service';
import {FormBuilder, FormGroup, Validators } from '@angular/forms';
@Component({
  selector: 'app-gestion',
  templateUrl: './gestion.component.html',
  styleUrls: ['./gestion.component.css']
})
export class GestionComponent {
  productoForm!:FormGroup;
  constructor(private formBuilder:FormBuilder, private servicio:ServiceService, private router:Router){}

  public newProducto = this.servicio.productoData
  public productoId = this.servicio.productoData.id

  ngOnInit():void{
    this.productoForm = this.formBuilder.group({
      name:[this.newProducto.name,[Validators.required]
    ],
    price:[this.newProducto.price,[Validators.required]
    ],
    image:[this.newProducto.image,[Validators.required]
    ],
    description:[this.newProducto.description,[Validators.required]
    ],

    })
    this.productoForm.valueChanges.subscribe((changes)=>{
      this.newProducto=changes;
    })
  }

  onSubmit(){
    this.servicio.postProducto(this.newProducto).subscribe();
    alert("Producto Creado")
    this.router.navigate(["lista"])
    this.productoForm.reset()


  }

}
