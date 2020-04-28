import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {DemoemandateComponent } from './demoemandate.component';
const routes: Routes = [{ path: '', component: DemoemandateComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DemoemandateRoutingModule { }
