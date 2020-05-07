import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EbulkuploadeddataComponent } from './ebulkuploadeddata.component';
import { EbulkuploadeddataRoutingModule } from './ebulkuploadeddata-routing.module';
import {AppSettings} from '../../app-settings';
import {AuthGuardService } from '../../Services/auth-guard.service';
import{EbulkUploadedDataServiceService} from '../../Services/EBulkUploadedData/ebulk-uploaded-data-service.service';

@NgModule({
  declarations: [EbulkuploadeddataComponent],
  imports: [
    CommonModule,
    EbulkuploadeddataRoutingModule
  ],
  providers:[
    AuthGuardService,
    { provide: 'BASE_URL', useFactory: getBaseUrl }
  ]
})
export class EbulkuploadeddataModule { }
export function getBaseUrl() {
  var BASE_URL=AppSettings.API_ENDPOINT;
    return BASE_URL;
}
