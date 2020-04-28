import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LinkSetupComponent } from './link-setup.component';
const routes: Routes = [{ path: '', component: LinkSetupComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LinkSetupRoutingModule { }
