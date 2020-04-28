import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HistoricalMandateComponent } from './historical-mandate.component';
const routes: Routes = [{ path: '', component: HistoricalMandateComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HistoricalmandateRoutingModule { }
