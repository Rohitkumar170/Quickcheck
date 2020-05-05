import * as tslib_1 from "tslib";
/// <reference path="../../../models/link-setup/bindgrid.ts" />
import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
var LinkSetupService = /** @class */ (function () {
    function LinkSetupService(_http, myAppUrl) {
        this._http = _http;
        this.baseUrl = "";
        this.UserId = "";
        this.EntityId = "";
        this.baseUrl = myAppUrl;
    }
    LinkSetupService.prototype.BindGrid = function () {
        debugger;
        var item = JSON.parse(sessionStorage.getItem('User'));
        this.UserId = item.UserId;
        this.EntityId = item.ReferenceId;
        return this._http.get(this.baseUrl + 'api/Link_setup/BindGrid');
    };
    LinkSetupService.prototype.GetIconDropDown = function () {
        return this._http.get(this.baseUrl + 'api/Link_setup/GetIconDropDown');
    };
    LinkSetupService.prototype.EditData = function (LinkId) {
        return this._http.get(this.baseUrl + 'api/Link_setup/EditData/' + LinkId);
    };
    LinkSetupService.prototype.InsertData = function (em, UserId) {
        var body = em;
        var headers = new HttpHeaders().set('content-type', 'application/json');
        return this._http.post(this.baseUrl + 'api/Link_setup/InsertData/' + UserId, body, {
            headers: headers
        });
    };
    LinkSetupService.prototype.UpDateLink = function (em, UserId, LinkId) {
        var body = em;
        var headers = new HttpHeaders().set('content-type', 'application/json');
        return this._http.post(this.baseUrl + 'api/Link_setup/UpDateLink/' + '/' + UserId + '/' + LinkId, body, {
            headers: headers
        });
    };
    LinkSetupService = tslib_1.__decorate([
        Injectable({
            providedIn: 'root'
        }),
        tslib_1.__param(1, Inject('BASE_URL')),
        tslib_1.__metadata("design:paramtypes", [HttpClient, String])
    ], LinkSetupService);
    return LinkSetupService;
}());
export { LinkSetupService };
//# sourceMappingURL=link-setup.service.js.map