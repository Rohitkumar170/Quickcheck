import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { UmrnuploadComponent } from './umrnupload.component';
var routes = [{ path: '', component: UmrnuploadComponent }];
var UmrnUploadRoutingModule = /** @class */ (function () {
    function UmrnUploadRoutingModule() {
    }
    UmrnUploadRoutingModule = tslib_1.__decorate([
        NgModule({
            imports: [RouterModule.forChild(routes)],
            exports: [RouterModule]
        })
    ], UmrnUploadRoutingModule);
    return UmrnUploadRoutingModule;
}());
export { UmrnUploadRoutingModule };
//# sourceMappingURL=umrn-upload-routing.module.js.map