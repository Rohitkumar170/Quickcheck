import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {DemophysicalComponent } from './demophysical.component';
const routes: Routes = [{ path: '', component: DemophysicalComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DemophysicalRoutingModule { }
