import { BrowserModule } from '@angular/platform-browser';
import { NgModule, ErrorHandler } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { LayOutModuleModule } from './master/lay-out-module.module';
import { RouterModule } from '@angular/router';
import{LoginModule} from './login/login.module';
import{ChangePasswordModule} from './change-password/change-password.module';
import { GlobalErrorHandler } from '../Models/global-error-handler';
import {AuthGuardService } from './Services/auth-guard.service';
import {AppSettings} from './app-settings';
@NgModule({
  declarations: [
      AppComponent
  ],
  imports: [ 
      BrowserModule,
      FormsModule,ReactiveFormsModule,
      HttpClientModule,
      LayOutModuleModule,
      LoginModule,
      ChangePasswordModule,
      RouterModule.forRoot([])
      
  ],
    //providers: [{ provide: ErrorHandler, useClass:GlobalErrorHandler }
    providers: [
        AuthGuardService,
          { provide: 'BASE_URL', useFactory: getBaseUrl }
    ],
  bootstrap: [AppComponent]
})

export class AppModule { }
export function getBaseUrl() {
  var BASE_URL=AppSettings.API_ENDPOINT;
    return BASE_URL;
}
