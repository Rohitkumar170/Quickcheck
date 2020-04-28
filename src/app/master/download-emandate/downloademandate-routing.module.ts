import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DownloadEmandateComponent } from './download-emandate.component';
const routes: Routes = [{ path: '', component: DownloadEmandateComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DownloademandateRoutingModule { }
