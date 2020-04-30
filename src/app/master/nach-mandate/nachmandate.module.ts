import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { NachmandateRoutingModule } from './nachmandate-routing.module';
import { NachMandateComponent } from './nach-mandate.component';
import { BankFormService } from '../../Services/BankForm/bank-form.service';
import {AppSettings} from '../../app-settings';
import {AuthGuardService } from '../../Services/auth-guard.service';
import { DatePipe } from '@angular/common';
@NgModule({
    declarations: [NachMandateComponent],
  imports: [
      CommonModule,
      FormsModule,
      ReactiveFormsModule,
    NachmandateRoutingModule
    ],
    providers: [
        BankFormService,AuthGuardService,DatePipe,
        { provide: 'BASE_URL', useFactory: getBaseUrl }
    ],
})
export class NachmandateModule { }
export function getBaseUrl() {
    var BASE_URL=AppSettings.API_ENDPOINT;
      return BASE_URL;
  }