import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EcreatemandateComponent } from './ecreatemandate.component';
const routes: Routes = [{ path: '', component: EcreatemandateComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EcreateMandateRoutingModule { }
