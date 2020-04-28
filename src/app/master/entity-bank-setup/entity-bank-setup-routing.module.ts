import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EntityBankSetupComponent } from './entity-bank-setup.component';
const routes: Routes = [{ path: '', component: EntityBankSetupComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EntityBankSetupRoutingModule { }
