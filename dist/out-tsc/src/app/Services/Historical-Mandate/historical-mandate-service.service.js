import * as tslib_1 from "tslib";
import { Injectable, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
var HistoricalMandateServiceService = /** @class */ (function () {
    function HistoricalMandateServiceService(_http, myAppUrl) {
        this._http = _http;
        this.baseUrl = "";
        this.baseUrl = myAppUrl;
    }
    HistoricalMandateServiceService.prototype.BindGridData = function (FromDate, ToDate, UserId) {
        // alert(FromDate + " " + ToDate + " " + UserId);
        //alert("Service" + FromDate + " " + ToDate);
        return this._http.get(this.baseUrl + 'api/BindData/DatesWise/' + FromDate + '/' + ToDate + '/' + UserId);
    };
    HistoricalMandateServiceService.prototype.errorHandler = function (error) {
        console.log(error);
        return Observable.throw(error);
    };
    HistoricalMandateServiceService = tslib_1.__decorate([
        Injectable({
            providedIn: 'root'
        }),
        tslib_1.__param(1, Inject('BASE_URL')),
        tslib_1.__metadata("design:paramtypes", [HttpClient, String])
    ], HistoricalMandateServiceService);
    return HistoricalMandateServiceService;
}());
export { HistoricalMandateServiceService };
//# sourceMappingURL=historical-mandate-service.service.js.map