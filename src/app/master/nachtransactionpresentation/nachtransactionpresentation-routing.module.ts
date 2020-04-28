import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {NachtransactionpresentationComponent } from './nachtransactionpresentation.component';
const routes: Routes = [{ path: '', component: NachtransactionpresentationComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class NachtransactionpresentationRoutingModule { }
