import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LoginServiceService } from '../Services/login-service.service';
import { LoginRoutingModule } from './login-routing.module';
import { LoginComponent } from './login.component';
var LoginModule = /** @class */ (function () {
    function LoginModule() {
    }
    LoginModule = tslib_1.__decorate([
        NgModule({
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
    ], LoginModule);
    return LoginModule;
}());
export { LoginModule };
//# sourceMappingURL=login.module.js.map