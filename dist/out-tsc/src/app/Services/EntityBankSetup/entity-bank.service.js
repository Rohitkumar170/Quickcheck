import * as tslib_1 from "tslib";
import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
var EntityBankService = /** @class */ (function () {
    function EntityBankService(_http, myAppUrl) {
        this._http = _http;
        this.baseUrl = "";
        this.baseUrl = myAppUrl;
    }
    EntityBankService.prototype.getEntity = function () {
        return this._http.get(this.baseUrl + 'api/EntityBank/getEntity');
    };
    EntityBankService.prototype.getBank = function (EntityId) {
        return this._http.get(this.baseUrl + 'api/EntityBank/getBank/' + EntityId);
    };
    EntityBankService.prototype.SaveData = function (em, UserId, arrvalue, adhocarr) {
        var body = em;
        var headers = new HttpHeaders().set('content-type', 'application/json');
        return this._http.post(this.baseUrl + 'api/EntityBank/SaveData/' + UserId + '/' + arrvalue + '/' + adhocarr, body, {
            headers: headers
        });
    };
    EntityBankService = tslib_1.__decorate([
        Injectable({
            providedIn: 'root'
        }),
        tslib_1.__param(1, Inject('BASE_URL')),
        tslib_1.__metadata("design:paramtypes", [HttpClient, String])
    ], EntityBankService);
    return EntityBankService;
}());
export { EntityBankService };
//# sourceMappingURL=entity-bank.service.js.map