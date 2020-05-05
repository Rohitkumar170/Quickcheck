import * as tslib_1 from "tslib";
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { LayOutModuleModule } from './master/lay-out-module.module';
import { RouterModule } from '@angular/router';
import { LoginModule } from './login/login.module';
import { ChangePasswordModule } from './change-password/change-password.module';
import { AuthGuardService } from './Services/auth-guard.service';
import { AppSettings } from './app-settings';
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib_1.__decorate([
        NgModule({
            declarations: [
                AppComponent
            ],
            imports: [
                BrowserModule,
                FormsModule, ReactiveFormsModule,
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
    ], AppModule);
    return AppModule;
}());
export { AppModule };
export function getBaseUrl() {
    var BASE_URL = AppSettings.API_ENDPOINT;
    return BASE_URL;
}
//# sourceMappingURL=app.module.js.map