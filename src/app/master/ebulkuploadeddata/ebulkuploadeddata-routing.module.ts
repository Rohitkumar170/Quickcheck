import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EbulkuploadeddataComponent } from './ebulkuploadeddata.component';
const routes: Routes = [{ path: '', component: EbulkuploadeddataComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EbulkuploadeddataRoutingModule { }
