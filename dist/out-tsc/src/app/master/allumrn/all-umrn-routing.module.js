import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AllumrnComponent } from './allumrn.component';
var routes = [
    { path: '', component: AllumrnComponent }
];
var AllUmrnRoutingModule = /** @class */ (function () {
    function AllUmrnRoutingModule() {
    }
    AllUmrnRoutingModule = tslib_1.__decorate([
        NgModule({
            imports: [RouterModule.forChild(routes)],
            exports: [RouterModule]
        })
    ], AllUmrnRoutingModule);
    return AllUmrnRoutingModule;
}());
export { AllUmrnRoutingModule };
//# sourceMappingURL=all-umrn-routing.module.js.map