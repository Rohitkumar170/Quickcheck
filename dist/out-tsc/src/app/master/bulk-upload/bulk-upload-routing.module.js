import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { BulkUploadComponent } from './bulk-upload.component';
var routes = [{ path: '', component: BulkUploadComponent }];
var BulkUploadRoutingModule = /** @class */ (function () {
    function BulkUploadRoutingModule() {
    }
    BulkUploadRoutingModule = tslib_1.__decorate([
        NgModule({
            imports: [RouterModule.forChild(routes)],
            exports: [RouterModule]
        })
    ], BulkUploadRoutingModule);
    return BulkUploadRoutingModule;
}());
export { BulkUploadRoutingModule };
//# sourceMappingURL=bulk-upload-routing.module.js.map