import { HttpClient, HttpHandler, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ShopService {

  endPoint: string = "http://localhost:8080/api/shops"

  constructor(private httpClient: HttpClient) { }

  getAll(){
    return this.httpClient.get(this.endPoint);
  }

  delete(id: any){
    return this.httpClient.delete(`${this.endPoint}/${id}`)
  }

  create(address: string, telephone: string){
    const headers = new HttpHeaders({
      'content-type': 'application/x-www-form-urlencoded'
    });

    const body = new URLSearchParams();
    body.append("address", address)
    body.append("telephone", telephone)

    return this.httpClient.post(this.endPoint, body, { headers })
  }

  update(){

  }

}
