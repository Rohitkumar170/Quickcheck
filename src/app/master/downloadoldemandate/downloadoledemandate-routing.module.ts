import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DownloadoldemandateComponent} from './downloadoldemandate.component';
const routes: Routes = [{ path: '', component: DownloadoldemandateComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DownloadoledemandateRoutingModule { }
