import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from './main/main.component';
import { HomeModule } from './home/home.module';
const routes: Routes = [
  { path:'main',component:MainComponent},
  {path :'',redirectTo:'main',pathMatch:'full'},
  {path:'child', loadChildren: () => import('./home/home.module').then(m => m.HomeModule)} 


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
