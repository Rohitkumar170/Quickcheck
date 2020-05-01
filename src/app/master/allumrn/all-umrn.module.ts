import { NgModule } from '@angular/core';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { AllumrnComponent } from './allumrn.component';
import { CommonModule } from '@angular/common';
import { AllUmrnRoutingModule } from './all-umrn-routing.module';
import {AppSettings} from '../../app-settings';
import {AuthGuardService } from '../../Services/auth-guard.service';
@NgModule({
    declarations: [AllumrnComponent],
  imports: [
      CommonModule,
    AllUmrnRoutingModule,  FormsModule, ReactiveFormsModule
  ], providers: [
    AuthGuardService,
      { provide: 'BASE_URL', useFactory: getBaseUrl }
]
})
export class AllUmrnModule { }
export function getBaseUrl() {
  var BASE_URL=AppSettings.API_ENDPOINT;
    return BASE_URL;
}

