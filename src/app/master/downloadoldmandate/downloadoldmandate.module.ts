import { NgModule } from '@angular/core';
import { DownloadoldmandateComponent } from './downloadoldmandate.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms'
import { CommonModule } from '@angular/common';
import { DownloadoldmandateRoutingModule } from './downloadoldmandate-routing.module';
import { OldmandateService } from '../../Services/oldmandate/oldmandate.service';
import {AppSettings} from '../../app-settings';
import {AuthGuardService } from '../../Services/auth-guard.service';
@NgModule({
    declarations: [DownloadoldmandateComponent],
  imports: [
      CommonModule,
      DownloadoldmandateRoutingModule,
      ReactiveFormsModule,
      FormsModule
    ], providers: [
        AuthGuardService,OldmandateService,
          { provide: 'BASE_URL', useFactory: getBaseUrl }
    ]
})
export class DownloadoldmandateModule { }
export function getBaseUrl() {
    var BASE_URL=AppSettings.API_ENDPOINT;
      return BASE_URL;
  }
  
