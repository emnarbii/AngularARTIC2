import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ResidencesComponent } from './residences/residences.component';
import { HomeComponent } from './home/home.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { FormResidenceComponent } from './form-residence/form-residence.component';
import { LoginComponent } from './login/login.component';
import { ApartementsComponent } from './apartements/apartements.component';
import { UserComponent } from './user/user.component';
import { AddapartmentComponent } from './addapartment/addapartment.component';

const routes: Routes = [

  {path:"home", component:ResidencesComponent, children:[
    // {path:"apartements/:r", component:ApartementsComponent},

  ]},
  {path:"addResidence",component:FormResidenceComponent},
  {path:"signin", component:LoginComponent},
  {path:"users", component:UserComponent},

  {path:"apartment", component:ApartementsComponent},
  {path:"addApartment", component:AddapartmentComponent},

  {path:"", redirectTo:"home",pathMatch:"full"},
  {path:"**", component:NotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
