import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { LoginServiceService } from '../Services/login-service.service';
var LoginComponent = /** @class */ (function () {
    function LoginComponent(router, formBuilder, _loginService) {
        this.router = router;
        this.formBuilder = formBuilder;
        this._loginService = _loginService;
        this.submitted = true;
        this.Isverified = false;
        this.btnloginDisabled = false;
        this.btnAgreeDisabled = false;
        this.LoginCheck = null;
    }
    LoginComponent.prototype.ngOnInit = function () {
        sessionStorage.clear();
        this.LoginForm = this.formBuilder.group({
            UserName: ['', [Validators.required, Validators.email, Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$')]],
            Password: ['', Validators.required],
            Email: ['', [Validators.required, Validators.email, Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$')]],
        });
    };
    Object.defineProperty(LoginComponent.prototype, "AllFields", {
        get: function () { return this.LoginForm.controls; },
        enumerable: true,
        configurable: true
    });
    LoginComponent.prototype.Removelabel = function () { this.errormsg = ''; };
    LoginComponent.prototype.displayFieldCss = function (field) {
        return {
            'validate': this.isFieldValid(field),
        };
    };
    LoginComponent.prototype.isFieldValid = function (field) {
        return !this.LoginForm.get(field).valid && this.LoginForm.get(field).touched;
    };
    LoginComponent.prototype.onSubmit = function () {
        var _this = this;
        this.btnloginDisabled = true;
        this.btnAgreeDisabled = true;
        var emailid = this.LoginForm.get('Email');
        emailid.clearValidators();
        emailid.updateValueAndValidity();
        if (this.LoginForm.valid) {
            this._loginService.GetLogin(this.AllFields.UserName.value, this.AllFields.Password.value).subscribe(function (data) {
                _this.login = data;
                if (data[0].Flag == "0") {
                    _this.errormsg = data[0].FlagValue;
                    _this.LoginForm.reset();
                    _this.btnloginDisabled = false;
                    _this.btnAgreeDisabled = false;
                }
                else {
                    sessionStorage.setItem('User', JSON.stringify(data[0]));
                    var item = JSON.parse(sessionStorage.getItem('User'));
                    //console.log(item.UserId);
                    _this.btnloginDisabled = false;
                    _this.btnAgreeDisabled = false;
                    _this.router.navigate(['/dashboard']);
                }
            });
        }
        else {
            this.validateAllFormFields(this.LoginForm);
        }
    };
    LoginComponent.prototype.Show = function () {
        this.submitted = false;
        this.Isverified = true;
    };
    LoginComponent.prototype.onAgree = function () {
        var _this = this;
        this.btnloginDisabled = true;
        this.btnAgreeDisabled = true;
        var username = this.LoginForm.get('UserName');
        var password = this.LoginForm.get('Password');
        username.clearValidators();
        username.updateValueAndValidity();
        password.clearValidators();
        password.updateValueAndValidity();
        if (this.LoginForm.valid) {
            this._loginService.ForgotPassword(this.AllFields.Email.value).subscribe(function (data) {
                _this.login = data;
                if (data[0].Flag == "0") {
                    _this.errormsg = data[0].FlagValue;
                    _this.btnloginDisabled = false;
                    _this.btnAgreeDisabled = false;
                }
                else {
                    _this.btnloginDisabled = false;
                    _this.btnAgreeDisabled = false;
                    _this.message = 'Email has been sent!!!';
                    alert(_this.message);
                    _this.submitted = true;
                    _this.Isverified = false;
                    _this.LoginForm.reset();
                    _this.router.navigate(['/Login']);
                }
            });
        }
        else {
            this.validateAllFormFields(this.LoginForm);
        }
    };
    LoginComponent.prototype.validateAllFormFields = function (formGroup) {
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
    LoginComponent = tslib_1.__decorate([
        Component({
            selector: 'app-login',
            templateUrl: './login.component.html',
            styleUrls: ['./login.component.css']
        }),
        tslib_1.__metadata("design:paramtypes", [Router, FormBuilder, LoginServiceService])
    ], LoginComponent);
    return LoginComponent;
}());
export { LoginComponent };
//# sourceMappingURL=login.component.js.map