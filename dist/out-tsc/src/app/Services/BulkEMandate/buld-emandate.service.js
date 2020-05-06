import * as tslib_1 from "tslib";
import { Injectable, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
var BuldEmandateService = /** @class */ (function () {
    function BuldEmandateService(_http, myAppUrl) {
        this._http = _http;
        this.baseUrl = "";
        this.baseUrl = myAppUrl;
    }
    BuldEmandateService.prototype.GetGridAllData = function (UserId, EntityId, topVal, ActivityType) {
        return this._http.get(this.baseUrl + 'api/BulkEMandate/GetGridData/' + UserId + '/' + EntityId + '/' + topVal + '/' + ActivityType);
    };
    BuldEmandateService = tslib_1.__decorate([
        Injectable({
            providedIn: 'root'
        }),
        tslib_1.__param(1, Inject('BASE_URL')),
        tslib_1.__metadata("design:paramtypes", [HttpClient, String])
    ], BuldEmandateService);
    return BuldEmandateService;
}());
export { BuldEmandateService };
//# sourceMappingURL=buld-emandate.service.js.map