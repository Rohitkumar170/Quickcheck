/// <reference path="../../services/report-vew/report-view.service.ts" />
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReportViewComponent } from './report-view.component';
import { ReportViewRoutingModule } from './report-view-routing.module';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
//import { ReportViewService } from 'ClientApp/app/Services/report-vew/report-view.service';



@NgModule({
    declarations: [ReportViewComponent],
  imports: [
    CommonModule,
      ReportViewRoutingModule, FormsModule, ReactiveFormsModule
    ]
   // providers:[ReportViewService]
   
})
export class ReportViewModule { }
