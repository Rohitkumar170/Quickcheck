import { NgModule } from '@angular/core';
import { ReactiveFormsModule,FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { EntityBankSetupComponent } from './entity-bank-setup.component';
import { EntityBankSetupRoutingModule } from './entity-bank-setup-routing.module';
import {AppSettings} from '../../app-settings';
import {AuthGuardService } from '../../Services/auth-guard.service';

@NgModule({
    declarations: [EntityBankSetupComponent],
    imports: [
        CommonModule,FormsModule,ReactiveFormsModule,
        EntityBankSetupRoutingModule
    ], providers: [
        AuthGuardService,
          { provide: 'BASE_URL', useFactory: getBaseUrl }
    ]
})
export class EntityBankSetupModule { }
export function getBaseUrl() {
    var BASE_URL=AppSettings.API_ENDPOINT;
      return BASE_URL;
  }
  
