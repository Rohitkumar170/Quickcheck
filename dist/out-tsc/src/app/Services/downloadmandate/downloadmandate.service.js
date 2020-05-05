import * as tslib_1 from "tslib";
/// <reference path="../../../models/downloadmandate/download-mandate-details.ts" />
import { Injectable, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
var DownloadmandateService = /** @class */ (function () {
    function DownloadmandateService(_http, myAppUrl) {
        this._http = _http;
        this.baseUrl = "";
        this.baseUrl = myAppUrl;
    }
    DownloadmandateService.prototype.getBankDropDown = function (userId) {
        return this._http.get(this.baseUrl + 'api/DownloadMandate/getdropdownbank/' + userId);
    };
    //getbtnSearch(userId, referenceNo): Observable<DownloadMandateDetails[]> {
    //    return this._http.get<DownloadMandateDetails[]>(this.baseUrl + 'api/DownloadMandate/getlogindetails/' + userId + '/' + referenceNo);
    //}
    DownloadmandateService.prototype.getBindGrid = function (userID, ToDate, FromDate, sponsorbankcode) {
        return this._http.get(this.baseUrl + 'api/DownloadMandate/getBindGrid/' + userID + '/' + ToDate + '/' + FromDate + '/' + sponsorbankcode);
    };
    DownloadmandateService.prototype.getBindGridRef = function (userID, refNo) {
        //alert("Service" + FromDate + " " + ToDate);
        return this._http.get(this.baseUrl + 'api/DownloadMandate/getBindGridRef/' + userID + '/' + refNo);
    };
    DownloadmandateService.prototype.getRejectMandate = function (userID, fromdate, todate, selectMandateId, rejectcomnt) {
        // alert(selectMandateId);
        return this._http.get(this.baseUrl + 'api/DownloadMandate/getRejectMandate/' + userID + '/' + fromdate + '/' + todate + '/' + selectMandateId + '/' + rejectcomnt);
    };
    DownloadmandateService = tslib_1.__decorate([
        Injectable({
            providedIn: 'root'
        }),
        tslib_1.__param(1, Inject('BASE_URL')),
        tslib_1.__metadata("design:paramtypes", [HttpClient, String])
    ], DownloadmandateService);
    return DownloadmandateService;
}());
export { DownloadmandateService };
//# sourceMappingURL=downloadmandate.service.js.map