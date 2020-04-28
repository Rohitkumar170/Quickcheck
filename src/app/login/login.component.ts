import { Component, OnInit } from '@angular/core';
import { Router,ActivatedRoute } from '@angular/router';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { Observable } from 'rxjs';
import { LoginServiceService } from '../Services/login-service.service';
import { Logindetails } from '../../Models/Login/logindetails'
@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
    href1: string; submitted = true; Isverified = false; login: Logindetails;
    LoginForm: FormGroup; public errormsg: any; message: string; btnloginDisabled: boolean = false; btnAgreeDisabled: boolean = false;
    LoginCheck = null; 
    constructor(private router: Router,private formBuilder: FormBuilder, private _loginService: LoginServiceService) {
    }
    ngOnInit() {
        sessionStorage.clear();
        this.LoginForm = this.formBuilder.group({
            UserName: ['', [Validators.required, Validators.email, Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$')]],
            Password: ['', Validators.required],
            Email: ['', [Validators.required, Validators.email, Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$')]],

        });
    }
    get AllFields() { return this.LoginForm.controls; }
    Removelabel() { this.errormsg = ''; }
    displayFieldCss(field: string) {

        return {
            'validate': this.isFieldValid(field),
        };
    }
    isFieldValid(field: string) {

        return !this.LoginForm.get(field).valid && this.LoginForm.get(field).touched;
    }
    onSubmit() {
        this.btnloginDisabled = true; this.btnAgreeDisabled = true;
        const emailid = this.LoginForm.get('Email');
        emailid.clearValidators(); emailid.updateValueAndValidity();
        if (this.LoginForm.valid) {
            this._loginService.GetLogin(this.AllFields.UserName.value, this.AllFields.Password.value).subscribe(
                (data) => {
                    this.login = data;
                    if (data[0].Flag == "0") {
                        this.errormsg = data[0].FlagValue;
                        this.LoginForm.reset();
                        this.btnloginDisabled = false; this.btnAgreeDisabled = false;
                    }
                    else {
                        sessionStorage.setItem('User', JSON.stringify(data[0]));
                        let item = JSON.parse(sessionStorage.getItem('User'));
                        //console.log(item.UserId);
                        this.btnloginDisabled = false; this.btnAgreeDisabled = false;
                        this.router.navigate(['/dashboard']);
                    }
                });
        }
        else {
            this.validateAllFormFields(this.LoginForm);
        }
    }
    Show() {
        this.submitted = false; this.Isverified = true;
    }
    onAgree() {
        this.btnloginDisabled = true; this.btnAgreeDisabled = true;
        const username = this.LoginForm.get('UserName'); const password = this.LoginForm.get('Password'); username.clearValidators(); username.updateValueAndValidity();
        password.clearValidators(); password.updateValueAndValidity();
        if (this.LoginForm.valid) {
            this._loginService.ForgotPassword(this.AllFields.Email.value).subscribe(
                (data) => {
                    this.login = data;
                    if (data[0].Flag == "0") {
                        this.errormsg = data[0].FlagValue;
                        this.btnloginDisabled = false; this.btnAgreeDisabled = false;
                    }
                    else {
                        this.btnloginDisabled = false; this.btnAgreeDisabled = false;
                        this.message = 'Email has been sent!!!';
                        alert(this.message);
                        this.submitted = true; this.Isverified = false;
                        this.LoginForm.reset();
                        this.router.navigate(['/Login']);
                    }
                });
             
        }
        else {
            this.validateAllFormFields(this.LoginForm);
        }
    }
    validateAllFormFields(formGroup: FormGroup) {
        Object.keys(formGroup.controls).forEach(field => {
            const control = formGroup.get(field);

            if (control instanceof FormControl) {
                control.markAsTouched({ onlySelf: true });
            } else if (control instanceof FormGroup) {
                this.validateAllFormFields(control);
            }
        });
    }
}



