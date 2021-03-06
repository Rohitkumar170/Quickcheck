import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BulkEmandateComponent } from './bulk-emandate.component';
import { BulkEmandateRoutingModule } from './bulk-emandate-routing.module';
import {AppSettings} from '../../app-settings';
import {AuthGuardService } from '../../Services/auth-guard.service';
@NgModule({
    declarations: [BulkEmandateComponent],
  imports: [
    CommonModule,
    BulkEmandateRoutingModule
  ],
   providers: [
    AuthGuardService,
      { provide: 'BASE_URL', useFactory: getBaseUrl }
],
})
export class BulkEmandateModule { }
export function getBaseUrl() {
  var BASE_URL=AppSettings.API_ENDPOINT;
    return BASE_URL;
}


