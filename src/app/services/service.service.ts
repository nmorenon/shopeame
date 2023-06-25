import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {
  public db_url: string = 'http://localhost:3000/productos';

  public productoData = {
    name:"",
    price:"",
    image:"",
    description:"",
    id:""
  }

  constructor (private http: HttpClient) {}
  getProductos () {
    return this.http.get(this.db_url);
  }
  getProducto(id:number){
    return this.http.get(`${this.db_url}/${id}`)
  }
  deleteProducto (id:number){
    return this.http.delete(`${this.db_url}/${id}`)
  }
  postProducto(producto:any){
    return this.http.post(this.db_url,producto)
  }
}
