import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
var DashboardComponent = /** @class */ (function () {
    function DashboardComponent() {
    }
    DashboardComponent.prototype.onClick = function (event) {
        this.showModal = true;
    };
    //Bootstrap Modal Close event
    DashboardComponent.prototype.hide = function () {
        this.showModal = false;
    };
    DashboardComponent.prototype.ngOnInit = function () {
    };
    DashboardComponent = tslib_1.__decorate([
        Component({
            selector: 'app-dashboard',
            templateUrl: './dashboard.component.html',
            styleUrls: ['./dashboard.component.css']
        })
    ], DashboardComponent);
    return DashboardComponent;
}());
export { DashboardComponent };
//# sourceMappingURL=dashboard.component.js.map