import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { UserRoutingModule } from './user-routing.module';
import { UserComponent } from './user.component';
import { CommonModule } from '@angular/common';
import { UserServiceService } from '../../Services/User/user-service.service';
import { AppSettings } from '../../app-settings';
import { AuthGuardService } from '../../Services/auth-guard.service';
var UserModule = /** @class */ (function () {
    function UserModule() {
    }
    UserModule = tslib_1.__decorate([
        NgModule({
            declarations: [UserComponent],
            imports: [
                CommonModule,
                UserRoutingModule, ReactiveFormsModule, FormsModule
            ], providers: [
                AuthGuardService, UserServiceService,
                { provide: 'BASE_URL', useFactory: getBaseUrl }
            ]
        })
    ], UserModule);
    return UserModule;
}());
export { UserModule };
export function getBaseUrl() {
    var BASE_URL = AppSettings.API_ENDPOINT;
    return BASE_URL;
}
//# sourceMappingURL=user.module.js.map