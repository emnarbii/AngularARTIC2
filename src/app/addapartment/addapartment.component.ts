import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Apartment } from '../models/apartment';
import { ApartmentService } from '../services/apartment.service';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-addapartment',
  templateUrl: './addapartment.component.html',
  styleUrls: ['./addapartment.component.css']
})
export class AddapartmentComponent {
  myForm!:FormGroup;

constructor(private aptrService:ApartmentService , private route:Router){}
  ngOninit(){
    this.myForm = new FormGroup({
      appartNum:new FormControl('',Validators.required),
      description:new FormControl('',Validators.required),
  })}

  
 

  addApartement(){
    console.log("form data:",this.myForm.value);
    this.aptrService.addAppartement(this.myForm.value).subscribe(()=>{
      console.log('added')
      this.route.navigate(['/appartment'])
    })
 

  }
  }

