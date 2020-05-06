import * as tslib_1 from "tslib";
import { Injectable, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
var OldmandateService = /** @class */ (function () {
    function OldmandateService(http, myAppUrl) {
        this.http = http;
        this.baseUrl = "";
        this.baseUrl = myAppUrl;
    }
    OldmandateService.prototype.BankBind = function (UserId) {
        // alert("service" +UserId);
        return this.http.get(this.baseUrl + 'api/OldMandate/GetDataByUID/' + UserId);
    };
    OldmandateService.prototype.Bindbyrefrence = function (UserId, Refrence1) {
        // alert("service" + UserId + Refrence1);
        return this.http.get(this.baseUrl + 'api/OldMandate/GetDataByReference/' + UserId + '/' + Refrence1);
    };
    OldmandateService.prototype.BindbyDate = function (UserId, FromDate, ToDate, SponsorBankCode) {
        //  alert("service" + FromDate + ToDate + SponsorBankCode + UserId);
        return this.http.get(this.baseUrl + 'api/OldMandate/GetDataByDate/' + UserId + '/' + FromDate + '/' + ToDate + '/' + SponsorBankCode);
    };
    OldmandateService.prototype.BindbyBank = function (UserId, FromDate, ToDate, SponsorBankCode) {
        //  alert("service" + FromDate + ToDate + SponsorBankCode + UserId);
        return this.http.get(this.baseUrl + 'api/OldMandate/GetDataByDate/' + UserId + '/' + FromDate + '/' + ToDate + '/' + SponsorBankCode);
    };
    OldmandateService.prototype.RejectData = function (FromDate, ToDate, RejectedReason, UserId, selectMandateId) {
        //  alert("service" + FromDate + ToDate + SponsorBankCode + UserId);
        return this.http.get(this.baseUrl + 'api/OldMandate/RejectDt/' + '/' + FromDate + '/' + ToDate + '/' + RejectedReason + '/' + UserId + '/' + selectMandateId);
    };
    OldmandateService = tslib_1.__decorate([
        Injectable({
            providedIn: 'root'
        }),
        tslib_1.__param(1, Inject('BASE_URL')),
        tslib_1.__metadata("design:paramtypes", [HttpClient, String])
    ], OldmandateService);
    return OldmandateService;
}());
export { OldmandateService };
//# sourceMappingURL=oldmandate.service.js.map