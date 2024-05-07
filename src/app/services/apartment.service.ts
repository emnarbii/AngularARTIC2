import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApartmentService {

  constructor(private http:HttpClient) { }

  getApartmentList(){}

  getSameValueOf(list:any[], critiria:string, value:any):number{
    let n=0;
    for(let i in list){
      if(list[i][critiria]===value){
        n++;
      }
    }
    return n;
  }
}
