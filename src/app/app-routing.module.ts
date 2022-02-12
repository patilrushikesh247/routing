import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ContactComponent } from './contact/contact.component';
import { AboutComponent } from './about/about.component';
import {ProductComponent} from './product/product.component';
import {LaptopComponent} from './product/laptop/laptop.component';
import { Notfound404Component } from './notfound404/notfound404.component';
const routes: Routes = [

  
  
  
  {
    path: 'home', component: HomeComponent
  },

  {
    path: 'contact', component: ContactComponent
  },


  {
    path: 'about', component: AboutComponent

  },
  {
    path: 'product', component: ProductComponent, 
      
     

  },

  {
    path: '**', component: Notfound404Component
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
