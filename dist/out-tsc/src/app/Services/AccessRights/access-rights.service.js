import * as tslib_1 from "tslib";
import { Injectable, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
var AccessRightsService = /** @class */ (function () {
    function AccessRightsService(_http, myAppUrl) {
        this._http = _http;
        this.baseUrl = "";
        this.baseUrl = myAppUrl;
    }
    AccessRightsService.prototype.getEntityDetails = function (UserType, ReferenceId) {
        return this._http.get(this.baseUrl + 'api/AccessRights/getBindEntityDetails/' + UserType + '/' + ReferenceId);
    };
    AccessRightsService.prototype.getLinksForUser = function (userid, UserType) {
        return this._http.get(this.baseUrl + 'api/AccessRights/getBindAccessRightDetails/' + userid + '/' + UserType);
    };
    AccessRightsService.prototype.getInsertdata = function (userid, storeIsActive, storeIsRead, storeLinkID, CUserId) {
        // alert('service')
        return this._http.get(this.baseUrl + 'api/AccessRights/getInsertdata/' + userid + '/' + storeIsActive + '/' + storeIsRead + '/' + storeLinkID + '/' + CUserId);
    };
    AccessRightsService = tslib_1.__decorate([
        Injectable({
            providedIn: 'root'
        }),
        tslib_1.__param(1, Inject('BASE_URL')),
        tslib_1.__metadata("design:paramtypes", [HttpClient, String])
    ], AccessRightsService);
    return AccessRightsService;
}());
export { AccessRightsService };
//# sourceMappingURL=access-rights.service.js.map