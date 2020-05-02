import * as tslib_1 from "tslib";
import { Injectable, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
var DownloadEmandateServiceService = /** @class */ (function () {
    function DownloadEmandateServiceService(_http, myAppUrl) {
        this._http = _http;
        this.baseUrl = "";
        this.baseUrl = myAppUrl;
    }
    DownloadEmandateServiceService.prototype.BankBind = function (UserId) {
        return this._http.get(this.baseUrl + 'api/DownloadEmandate/BankBind/' + UserId);
    };
    //paras
    DownloadEmandateServiceService.prototype.BindGridData = function (FromDate, ToDate, Bank, UserId) {
        //alert("Service" + FromDate + " " + ToDate + Bank);
        return this._http.get(this.baseUrl + 'api/DownloadEmandate/BindGridData/' + FromDate + '/' + ToDate + '/' + Bank + '/' + UserId);
    };
    //paras
    DownloadEmandateServiceService.prototype.errorHandler = function (error) {
        console.log(error);
        return Observable.throw(error);
    };
    DownloadEmandateServiceService = tslib_1.__decorate([
        Injectable({
            providedIn: 'root'
        }),
        tslib_1.__param(1, Inject('BASE_URL')),
        tslib_1.__metadata("design:paramtypes", [HttpClient, String])
    ], DownloadEmandateServiceService);
    return DownloadEmandateServiceService;
}());
export { DownloadEmandateServiceService };
//# sourceMappingURL=download-emandate-service.service.js.map