import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
var GlobalErrorHandler = /** @class */ (function () {
    function GlobalErrorHandler() {
    }
    GlobalErrorHandler.prototype.handleError = function (error) {
        var chunkFailedMessage = /Loading chunk [\d]+ failed/;
        if (chunkFailedMessage.test(error.message)) {
            window.location.reload();
        }
    };
    GlobalErrorHandler = tslib_1.__decorate([
        Injectable()
    ], GlobalErrorHandler);
    return GlobalErrorHandler;
}());
export { GlobalErrorHandler };
//# sourceMappingURL=global-error-handler.js.map