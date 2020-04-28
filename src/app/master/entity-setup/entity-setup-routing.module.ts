import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EntitySetupComponent } from './entity-setup.component';
const routes: Routes = [{ path: '', component: EntitySetupComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EntitySetupRoutingModule { }
