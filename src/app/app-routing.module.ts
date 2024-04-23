import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ResidencesComponent } from './residences/residences.component';
import { HomeComponent } from './home/home.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { FormResidenceComponent } from './form-residence/form-residence.component';
import { ApartementsComponent } from './apartements/apartements.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [

  {path:"home", component:ResidencesComponent, children:[
    {path:"apartements/:r", component:ApartementsComponent},

  ]},
  {path:"addResidence",component:FormResidenceComponent},
  {path:"signin", component:LoginComponent},

  // {path:"apartements/:r", component:ApartementsComponent},
  {path:"", redirectTo:"home",pathMatch:"full"},
  {path:"**", component:NotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
