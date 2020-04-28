import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {UmrnhistoryComponent } from './umrnhistory.component';
const routes: Routes = [{ path: '', component: UmrnhistoryComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UmrnhistoryRoutingModule { }
