/// <reference path="../../services/umrnupload/umrn-upload.service.ts" />
import { NgModule } from '@angular/core';
import { UmrnuploadComponent } from './umrnupload.component';
import { CommonModule } from '@angular/common';
import { UmrnUploadRoutingModule } from './umrn-upload-routing.module';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

import { UmrnUploadService } from '../../services/umrnupload/umrn-upload.service';

@NgModule({
    declarations: [UmrnuploadComponent],
  imports: [
      CommonModule,
    UmrnUploadRoutingModule
  ]
})
export class UmrnUploadModule { }
