
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { LinkSetupComponent } from './link-setup.component';
import { LinkSetupRoutingModule } from './link-setup-routing.module';
//import { LinkSetupService } from 'ClientApp/app/Services/link-setup/link-setup.service';

@NgModule({
    declarations: [LinkSetupComponent],
    imports: [
        CommonModule,
        LinkSetupRoutingModule, FormsModule, ReactiveFormsModule
    ],
    //providers: [LinkSetupService, { provide: 'BASE_URL', useFactory: getBaseUrl }]
})
export class LinkSetupModule { }
//export function getBaseUrl() {
//    return document.getElementsByTagName('base')[0].href;
//}
