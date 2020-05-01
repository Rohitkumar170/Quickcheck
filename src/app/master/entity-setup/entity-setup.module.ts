import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { EntitySetupComponent } from './entity-setup.component';
import { EntitySetupRoutingModule } from './entity-setup-routing.module';
import { EntitySetupServiceService } from '../../services/enity_setup/entity-setup-service.service';
import { BindCountry } from '../../../models/entity_setup/bind-country';

@NgModule({
    declarations: [EntitySetupComponent],
  imports: [
    CommonModule,
      EntitySetupRoutingModule, FormsModule, ReactiveFormsModule
    ],
    providers: [
        EntitySetupServiceService, { provide: 'BASE_URL', useFactory: getBaseUrl }
    ]
})
export class EntitySetupModule { }
export function getBaseUrl() {
    return document.getElementsByTagName('base')[0].href;
}
