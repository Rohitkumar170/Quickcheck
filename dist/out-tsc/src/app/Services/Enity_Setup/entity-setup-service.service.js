import * as tslib_1 from "tslib";
import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
var EntitySetupServiceService = /** @class */ (function () {
    function EntitySetupServiceService(_http, myAppUrl) {
        this._http = _http;
        this.baseUrl = "";
        this.baseUrl = myAppUrl;
    }
    EntitySetupServiceService.prototype.BindCountryAndBank = function () {
        return this._http.get(this.baseUrl + 'api/BindCountryAndBank');
    };
    EntitySetupServiceService.prototype.BingGrid = function () {
        return this._http.get(this.baseUrl + 'api/BingGrid');
    };
    EntitySetupServiceService.prototype.SaveData = function (em) {
        var body = em;
        var headers = new HttpHeaders().set('content-type', 'application/json');
        return this._http.post(this.baseUrl + 'api/SaveData', body, {
            headers: headers
        });
    };
    EntitySetupServiceService.prototype.errorHandler = function (error) {
        console.log(error);
        return Observable.throw(error);
    };
    EntitySetupServiceService = tslib_1.__decorate([
        Injectable({
            providedIn: 'root'
        }),
        tslib_1.__param(1, Inject('BASE_URL')),
        tslib_1.__metadata("design:paramtypes", [HttpClient, String])
    ], EntitySetupServiceService);
    return EntitySetupServiceService;
}());
export { EntitySetupServiceService };
//# sourceMappingURL=entity-setup-service.service.js.map