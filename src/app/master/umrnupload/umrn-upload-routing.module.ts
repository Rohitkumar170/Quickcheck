import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {UmrnuploadComponent } from './umrnupload.component';
const routes: Routes = [{ path: '', component: UmrnuploadComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UmrnUploadRoutingModule { }
