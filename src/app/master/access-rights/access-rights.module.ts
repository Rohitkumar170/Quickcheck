import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AccessRightsComponent } from './access-rights.component';
import { AccessRightsRoutingModule } from './access-rights-routing.module';
import {AppSettings} from '../../app-settings';
import {AuthGuardService } from '../../Services/auth-guard.service';

@NgModule({
    declarations: [AccessRightsComponent],
    imports: [
        CommonModule,
        AccessRightsRoutingModule
    ], providers: [
        AuthGuardService,
          { provide: 'BASE_URL', useFactory: getBaseUrl }
    ]
})
export class AccessRightsModule { }
export function getBaseUrl() {
    var BASE_URL=AppSettings.API_ENDPOINT;
      return BASE_URL;
  }
