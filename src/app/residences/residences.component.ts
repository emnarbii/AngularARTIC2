import { Component } from '@angular/core';
import {Residence} from "../core/models/Residence";
import {Apartment} from "../core/models/Appartement";
import { ApartmentService } from '../services/apartment.service';

@Component({
  selector: 'app-residences',
  templateUrl: './residences.component.html',
  styleUrls: ['./residences.component.css']
})
export class ResidencesComponent {
  aprlist : Apartment[] = []
  likeaprt : Apartment[] = []
  surface : number = 0
  stat!:number
  constructor(private aprtService:ApartmentService){}


  ngOnInit(){
this.stat=this.aprtService.getSameValueOf(this.listResidences,'address','Rades')
console.log('stat: ',this.stat);
  }
  listResidences:Residence[]=[
    {id:1,"name":"El fel","address":"Rades","image":"../../assets/images/R1.jpeg"},
    {id:2,"name":"El yasmine","address":"Ezzahra","image":"../../assets/images/R2.jpg"},
    {id:3,"name":"El Arij","address":"Rades","image":"../../assets/images/R3.jpg"},
    {id:4,"name":"El Anber","address":"Manzah 5","image":"../../assets/images/R4.jpg"}];


  residencesList: Residence[]=[
    {id: 1, name: "Residence 1", address: "Address 1", 
   image:"image 1"},
    {id: 1, name: "Residence 2", address: "Address 2", 
   image:"image 2"},
    {id: 1, name: "Residence 3", address: "Address 1", 
   image:"image 3"}
    ]

  listApartments:Apartment[]=[
    {id:1,"appartNum":1,"floorNum":0,"surface":100,"terrace":"oui","surfaceTerrace":20,"category":"S+1","description":"Appartement S+1","residence":this.listResidences[0] },
    {id:2,"appartNum":2,"floorNum":0,"surface":130,"terrace":"non","surfaceTerrace":0,"category":"S+2","description":"Appartement S+2","residence":this.listResidences[0] },
    {id:3,"appartNum":3,"floorNum":0,"surface":150,"terrace":"oui","surfaceTerrace":30,"category":"S+3","description":"Appartement S+3","residence":this.listResidences[1] }];


  getapprtementlist(id:number) {
    console.log(this.listApartments.filter(apartment => apartment.residence.id === id))
    this.aprlist = this.listApartments.filter(apartment => apartment.residence.id === id)

  }

  likeappartement(apartment :Apartment) {
    /*console.log( this.likeaprt.push(apartment))*/
    if (!this.likeaprt.includes(apartment)){
      this.likeaprt.push(apartment)
    }
  }
}
