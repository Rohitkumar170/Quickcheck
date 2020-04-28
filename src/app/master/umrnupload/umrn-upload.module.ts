/// <reference path="../../services/umrnupload/umrn-upload.service.ts" />
import { NgModule } from '@angular/core';
import { UmrnuploadComponent } from './umrnupload.component';
import { CommonModule } from '@angular/common';
import { UmrnUploadRoutingModule } from './umrn-upload-routing.module';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

import { UmrnUploadService } from '../../services/umrnupload/umrn-upload.service';
import {AppSettings} from '../../app-settings';
import {AuthGuardService } from '../../Services/auth-guard.service';
@NgModule({
    declarations: [UmrnuploadComponent],
  imports: [
      CommonModule,
    UmrnUploadRoutingModule
  ], providers: [
    AuthGuardService,
      { provide: 'BASE_URL', useFactory: getBaseUrl }
]
})
export class UmrnUploadModule { }
export function getBaseUrl() {
  var BASE_URL=AppSettings.API_ENDPOINT;
    return BASE_URL;
}

