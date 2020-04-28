import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { LoginServiceService } from '../Services/login-service.service';
import { ChangePasswordRoutingModule } from './change-password-routing.module';
import { ChangePasswordComponent } from './change-password.component';
@NgModule({
  declarations: [ChangePasswordComponent],
  imports: [
      CommonModule,
      FormsModule,
      ReactiveFormsModule,
      ChangePasswordRoutingModule
    ],
    providers: [
        LoginServiceService
    ]
})
export class ChangePasswordModule { }
