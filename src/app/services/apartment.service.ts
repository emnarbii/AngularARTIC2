import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Apartment } from '../models/apartment';

@Injectable({
  providedIn: 'root'
})
export class ApartmentService {

  constructor(private http:HttpClient) { }


  getSameValueOf(list:any[], critiria:string, value:any):number{
    let n=0;
    for(let i in list){
      if(list[i][critiria]===value){
        n++;
      }
    }
    return n;
  }

  getApartmentList():Observable<Apartment[]>{
    return this.http.get<Apartment[]>('http://localhost:3000/appartement');
  }

  deleteApartment(id:any):Observable<Apartment[]>{
    return this.http.delete<Apartment[]>('http://localhost:3000/appartement'+'/'+id)
  }

  addAppartement(appartement:Apartment){
    return this.http.post('http://localhost:3000/appartement/', 
    appartement);
    }


}
