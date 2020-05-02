import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EcreatemandateComponent } from './ecreatemandate.component';
import { EcreateMandateRoutingModule } from './ecreate-mandate-routing.module';

@NgModule({
  declarations: [EcreatemandateComponent],
  imports: [
    CommonModule,
    EcreateMandateRoutingModule
  ]
})
export class EcreateMandateModule { }
