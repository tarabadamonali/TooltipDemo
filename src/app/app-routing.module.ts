import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TooltipComponent } from './tooltip/tooltip.component';


const routes: Routes = [
  {
    path:'',
    component:TooltipComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
