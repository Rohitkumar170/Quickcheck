import * as tslib_1 from "tslib";
import { Injectable, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
var DownloadoldemandateService = /** @class */ (function () {
    function DownloadoldemandateService(_http, myAppUrl) {
        this._http = _http;
        this.baseUrl = "";
        this.baseUrl = myAppUrl;
    }
    DownloadoldemandateService.prototype.BankBind = function (userid) {
        return this._http.get(this.baseUrl + 'api/Downloadoldemandate/BankBind/' + userid);
    };
    DownloadoldemandateService.prototype.SearchData = function (FromDate, ToDate, Bank, userid) {
        return this._http.get(this.baseUrl + 'api/Downloadoldemandate/SearchData/' + FromDate + '/' + ToDate + '/' + Bank + '/' + userid);
    };
    DownloadoldemandateService.prototype.errorHandler = function (error) {
        console.log(error);
        return Observable.throw(error);
    };
    DownloadoldemandateService = tslib_1.__decorate([
        Injectable({
            providedIn: 'root'
        }),
        tslib_1.__param(1, Inject('BASE_URL')),
        tslib_1.__metadata("design:paramtypes", [HttpClient, String])
    ], DownloadoldemandateService);
    return DownloadoldemandateService;
}());
export { DownloadoldemandateService };
//# sourceMappingURL=downloadoldemandate.service.js.map