import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { EntitySetupComponent } from './entity-setup.component';
import { EntitySetupRoutingModule } from './entity-setup-routing.module';
import { EntitySetupServiceService } from '../../services/enity_setup/entity-setup-service.service';
import { BindCountry } from '../../../models/entity_setup/bind-country';
import {AppSettings} from '../../app-settings';
import {AuthGuardService } from '../../Services/auth-guard.service';

@NgModule({
    declarations: [EntitySetupComponent],
  imports: [
    CommonModule,
      EntitySetupRoutingModule, FormsModule, ReactiveFormsModule
    ],
    providers: [
      AuthGuardService,EntitySetupServiceService, { provide: 'BASE_URL', useFactory: getBaseUrl }
    ]
})
export class EntitySetupModule { }
export function getBaseUrl() {
  var BASE_URL=AppSettings.API_ENDPOINT;
    return BASE_URL;
}