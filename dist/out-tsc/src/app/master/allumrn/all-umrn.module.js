import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { AllumrnComponent } from './allumrn.component';
import { CommonModule } from '@angular/common';
import { AllUmrnRoutingModule } from './all-umrn-routing.module';
import { AppSettings } from '../../app-settings';
import { AuthGuardService } from '../../Services/auth-guard.service';
var AllUmrnModule = /** @class */ (function () {
    function AllUmrnModule() {
    }
    AllUmrnModule = tslib_1.__decorate([
        NgModule({
            declarations: [AllumrnComponent],
            imports: [
                CommonModule,
                AllUmrnRoutingModule
            ], providers: [
                AuthGuardService,
                { provide: 'BASE_URL', useFactory: getBaseUrl }
            ]
        })
    ], AllUmrnModule);
    return AllUmrnModule;
}());
export { AllUmrnModule };
export function getBaseUrl() {
    var BASE_URL = AppSettings.API_ENDPOINT;
    return BASE_URL;
}
//# sourceMappingURL=all-umrn.module.js.map