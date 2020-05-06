/// <reference path="../../../models/nachtransactionpresentation/nachtransactionpresentation.ts" />
import * as tslib_1 from "tslib";
import { Injectable, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
var NachtransactionporesentationService = /** @class */ (function () {
    function NachtransactionporesentationService(_http, myAppUrl) {
        this._http = _http;
        this.baseUrl = "";
        this.baseUrl = myAppUrl;
    }
    NachtransactionporesentationService.prototype.BankBind = function (EntityId, UserId) {
        //alert("Service" + FromDate + " " + ToDate + Bank);
        return this._http.get(this.baseUrl + 'api/NachtransactionPresentation/BankBind/' + EntityId + '/' + UserId);
    };
    NachtransactionporesentationService.prototype.CheckUser = function (EntityId, UserId) {
        return this._http.get(this.baseUrl + 'api/NachtransactionPresentation/CheckUser/' + EntityId + '/' + UserId);
    };
    NachtransactionporesentationService.prototype.BindGridForm = function (EntityId, UserId, Bank) {
        return this._http.get(this.baseUrl + 'api/NachtransactionPresentation/BindGridForm/' + EntityId + '/' + UserId + '/' + Bank);
    };
    //paras
    NachtransactionporesentationService.prototype.BindMainGrid = function (UserId) {
        alert('MainGrid');
        return this._http.get(this.baseUrl + 'api/NachtransactionPresentation/BindMainGrid/' + UserId);
    };
    NachtransactionporesentationService.prototype.BindUMRN = function (EntityId, UserId, PresDate) {
        return this._http.get(this.baseUrl + 'api/NachtransactionPresentation/BindUMRN/' + UserId + '/' + EntityId + '/' + PresDate);
        // 
    };
    NachtransactionporesentationService.prototype.BindRefrence = function (EntityId, UserId, PresDate) {
        //alert('hellos');
        return this._http.get(this.baseUrl + 'api/NachtransactionPresentation/BindRefrence/' + UserId + '/' + EntityId + '/' + PresDate);
        // 
    };
    NachtransactionporesentationService.prototype.BindOnRowdblClick = function (EntityId, UserId, FileNo) {
        return this._http.get(this.baseUrl + 'api/NachtransactionPresentation/BindOnRowdblClick/' + UserId + '/' + EntityId + '/' + FileNo);
        // 
    };
    NachtransactionporesentationService.prototype.BindUMRNOnchange = function (EntityId, UserId, RefrenceNo) {
        return this._http.get(this.baseUrl + 'api/NachtransactionPresentation/BindUMRNOnchange/' + UserId + '/' + EntityId + '/' + RefrenceNo);
        // 
    };
    NachtransactionporesentationService.prototype.BindRefOnchange = function (EntityId, UserId, UMRN) {
        alert('hellos');
        return this._http.get(this.baseUrl + 'api/NachtransactionPresentation/BindRefOnchange/' + UserId + '/' + EntityId + '/' + UMRN);
        // 
    };
    NachtransactionporesentationService.prototype.errorHandler = function (error) {
        console.log(error);
        return Observable.throw(error);
    };
    NachtransactionporesentationService = tslib_1.__decorate([
        Injectable({
            providedIn: 'root'
        }),
        tslib_1.__param(1, Inject('BASE_URL')),
        tslib_1.__metadata("design:paramtypes", [HttpClient, String])
    ], NachtransactionporesentationService);
    return NachtransactionporesentationService;
}());
export { NachtransactionporesentationService };
//# sourceMappingURL=nachtransactionporesentation.service.js.map