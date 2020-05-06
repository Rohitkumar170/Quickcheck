import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { LoginServiceService } from '../Services/login-service.service';
import { ConfirmPasswordValidator } from '../../Models/Validations/validation';
var ChangePasswordComponent = /** @class */ (function () {
    function ChangePasswordComponent(router1, router, formBuilder, _loginService) {
        this.router1 = router1;
        this.router = router;
        this.formBuilder = formBuilder;
        this._loginService = _loginService;
        this.btndoneDisabled = false;
    }
    ChangePasswordComponent.prototype.ngOnInit = function () {
        sessionStorage.clear();
        this.href1 = this.router.url;
        this.ForgotForm = this.formBuilder.group({
            password: ['', Validators.required],
            confirmPassword: ['', Validators.required]
        }, { validator: ConfirmPasswordValidator.MatchPassword });
    };
    Object.defineProperty(ChangePasswordComponent.prototype, "AllFields", {
        get: function () { return this.ForgotForm.controls; },
        enumerable: true,
        configurable: true
    });
    ChangePasswordComponent.prototype.Removelabel = function () { this.errormsg = ''; };
    ChangePasswordComponent.prototype.displayFieldCss = function (field) {
        return {
            'validate': this.isFieldValid(field),
        };
    };
    ChangePasswordComponent.prototype.isFieldValid = function (field) {
        return !this.ForgotForm.get(field).valid && this.ForgotForm.get(field).touched;
    };
    ChangePasswordComponent.prototype.onSubmit = function () {
        var _this = this;
        var id = this.router1.snapshot.paramMap.get("Id");
        if (this.ForgotForm.valid) {
            this.btndoneDisabled = true;
            this._loginService.ChangePassword(this.AllFields.password.value, id).subscribe(function (data) {
                _this.login = data;
                if (data[0].Flag == "0") {
                    _this.errormsg = data[0].FlagValue;
                    _this.btndoneDisabled = false;
                }
                else {
                    _this.btndoneDisabled = false;
                    _this.router.navigate(['/Login']);
                }
            });
        }
        else {
            this.validateAllFormFields(this.ForgotForm);
        }
    };
    ChangePasswordComponent.prototype.validateAllFormFields = function (formGroup) {
        var _this = this;
        Object.keys(formGroup.controls).forEach(function (field) {
            var control = formGroup.get(field);
            if (control instanceof FormControl) {
                control.markAsTouched({ onlySelf: true });
            }
            else if (control instanceof FormGroup) {
                _this.validateAllFormFields(control);
            }
        });
    };
    ChangePasswordComponent = tslib_1.__decorate([
        Component({
            selector: 'app-change-password',
            templateUrl: './change-password.component.html',
            styleUrls: ['./change-password.component.css']
        }),
        tslib_1.__metadata("design:paramtypes", [ActivatedRoute, Router, FormBuilder, LoginServiceService])
    ], ChangePasswordComponent);
    return ChangePasswordComponent;
}());
export { ChangePasswordComponent };
//# sourceMappingURL=change-password.component.js.map