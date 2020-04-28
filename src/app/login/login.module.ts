import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LoginServiceService } from '../Services/login-service.service';
import { LoginRoutingModule } from './login-routing.module';
import { LoginComponent } from './login.component';


@NgModule({
  declarations: [LoginComponent],
  imports: [
      CommonModule,
      FormsModule,
      ReactiveFormsModule,
     LoginRoutingModule
    ],
    providers: [
        LoginServiceService
    ]
})
export class LoginModule { }
