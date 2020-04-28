import { NgModule } from '@angular/core';
import { DemophysicalComponent } from './demophysical.component';
import { CommonModule } from '@angular/common';
import { DemophysicalRoutingModule } from './demophysical-routing.module';
import {AppSettings} from '../../app-settings';
import {AuthGuardService } from '../../Services/auth-guard.service';
@NgModule({
    declarations: [DemophysicalComponent],
  imports: [
      CommonModule,
    DemophysicalRoutingModule
  ], providers: [
    AuthGuardService,
      { provide: 'BASE_URL', useFactory: getBaseUrl }
]
})
export class DemophysicalModule { }
export function getBaseUrl() {
  var BASE_URL=AppSettings.API_ENDPOINT;
    return BASE_URL;
}
