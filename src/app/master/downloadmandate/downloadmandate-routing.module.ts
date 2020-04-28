import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DownloadmandateComponent} from './downloadmandate.component';
const routes: Routes = [{ path: '', component: DownloadmandateComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DownloadmandateRoutingModule { }
