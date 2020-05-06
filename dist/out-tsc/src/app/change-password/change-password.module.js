import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { LoginServiceService } from '../Services/login-service.service';
import { ChangePasswordRoutingModule } from './change-password-routing.module';
import { ChangePasswordComponent } from './change-password.component';
var ChangePasswordModule = /** @class */ (function () {
    function ChangePasswordModule() {
    }
    ChangePasswordModule = tslib_1.__decorate([
        NgModule({
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
    ], ChangePasswordModule);
    return ChangePasswordModule;
}());
export { ChangePasswordModule };
//# sourceMappingURL=change-password.module.js.map