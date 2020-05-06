import * as tslib_1 from "tslib";
import { Injectable, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
var BankFormService = /** @class */ (function () {
    function BankFormService(_http, myAppUrl) {
        this._http = _http;
        this.baseUrl = "";
        this.UserId = "";
        this.EntityId = "";
        this.baseUrl = myAppUrl;
    }
    BankFormService.prototype.GetCategory = function () {
        var Sessionvalue = JSON.parse(sessionStorage.getItem('User'));
        this.UserId = Sessionvalue.UserId;
        this.EntityId = Sessionvalue.ReferenceId;
        return this._http.get(this.baseUrl + 'api/BankForm/GetBankFormdata/' + this.UserId + '/' + this.EntityId);
    };
    BankFormService = tslib_1.__decorate([
        Injectable({
            providedIn: 'root'
        }),
        tslib_1.__param(1, Inject('BASE_URL')),
        tslib_1.__metadata("design:paramtypes", [HttpClient, String])
    ], BankFormService);
    return BankFormService;
}());
export { BankFormService };
//# sourceMappingURL=bank-form.service.js.map