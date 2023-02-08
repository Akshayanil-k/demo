import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutUsComponent } from './home/about-us/about-us.component';
import { HomeComponent } from './home/home.component';
import { PhonesComponent } from './phones/phones.component';

const routes: Routes = [
  
  { path:'home',component:HomeComponent},
  {path :'',redirectTo:'home',pathMatch:'full'},
  { path:'src/app/home/about-us',component:AboutUsComponent},
  { path:'phones/:phonename/:price',component:PhonesComponent},
  {path:'phones/:phonename',component:PhonesComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
