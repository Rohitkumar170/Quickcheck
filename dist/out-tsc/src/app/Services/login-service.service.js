import * as tslib_1 from "tslib";
import { Injectable, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
var LoginServiceService = /** @class */ (function () {
    function LoginServiceService(_http, myAppUrl) {
        this._http = _http;
        this.baseUrl = "";
        this.baseUrl = myAppUrl;
    }
    LoginServiceService.prototype.GetLogin = function (Username, Password) {
        return this._http.get(this.baseUrl + 'api/Login/getlogindetails/' + Username + '/' + Password);
    };
    LoginServiceService.prototype.ForgotPassword = function (Username) {
        return this._http.get(this.baseUrl + 'api/Login/ForgotPassword/' + Username);
    };
    LoginServiceService.prototype.ChangePassword = function (Password, Email) {
        return this._http.get(this.baseUrl + 'api/Login/UpdatePassword/' + Password + '/' + Email);
    };
    LoginServiceService.prototype.errorHandler = function (error) {
        console.log(error);
        return Observable.throw(error);
    };
    LoginServiceService = tslib_1.__decorate([
        Injectable({
            providedIn: 'root'
        }),
        tslib_1.__param(1, Inject('BASE_URL')),
        tslib_1.__metadata("design:paramtypes", [HttpClient, String])
    ], LoginServiceService);
    return LoginServiceService;
}());
export { LoginServiceService };
//# sourceMappingURL=login-service.service.js.map