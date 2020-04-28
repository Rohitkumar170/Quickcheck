import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {DownloadoldmandateComponent } from './downloadoldmandate.component';
const routes: Routes = [{ path: '', component: DownloadoldmandateComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DownloadoldmandateRoutingModule { }
