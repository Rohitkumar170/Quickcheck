import { NgModule } from '@angular/core';
import { NachtransactionpresentationComponent } from './nachtransactionpresentation.component';
import { CommonModule } from '@angular/common';
import { NachtransactionpresentationRoutingModule } from './nachtransactionpresentation-routing.module';
import {AppSettings} from '../../app-settings';
import {AuthGuardService } from '../../Services/auth-guard.service';
@NgModule({
    declarations: [NachtransactionpresentationComponent],
  imports: [
      CommonModule,
    NachtransactionpresentationRoutingModule
  ], providers: [
    AuthGuardService,
      { provide: 'BASE_URL', useFactory: getBaseUrl }
]
})
export class NachtransactionpresentationModule { }
export function getBaseUrl() {
  var BASE_URL=AppSettings.API_ENDPOINT;
    return BASE_URL;
}

