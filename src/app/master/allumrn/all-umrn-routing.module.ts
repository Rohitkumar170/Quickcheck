import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AllumrnComponent} from './allumrn.component';
const routes: Routes = [
    { path: '', component: AllumrnComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AllUmrnRoutingModule { }
