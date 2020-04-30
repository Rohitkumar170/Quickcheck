import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AccessRightsComponent } from './access-rights.component';
const routes: Routes = [{ path: '', component: AccessRightsComponent }];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AccessRightsRoutingModule { }


