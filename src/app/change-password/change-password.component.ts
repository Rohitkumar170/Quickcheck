import { Component, OnInit } from '@angular/core';
import { Router,ActivatedRoute } from '@angular/router';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { LoginServiceService } from '../Services/login-service.service';
import { Logindetails } from '../../Models/Login/logindetails'
import { ConfirmPasswordValidator } from '../../Models/Validations/validation'
@Component({
  selector: 'app-change-password',
  templateUrl: './change-password.component.html',
  styleUrls: ['./change-password.component.css']
})
export class ChangePasswordComponent implements OnInit {
    Getid: string; href1: string; login: Logindetails;
    ForgotForm: FormGroup; public errormsg: any; message: string; btndoneDisabled: boolean = false; 
    constructor(
        private router1: ActivatedRoute, private router: Router, private formBuilder: FormBuilder, private _loginService: LoginServiceService) {
    }
    ngOnInit() {

        sessionStorage.clear();
        this.href1 = this.router.url;
        this.ForgotForm = this.formBuilder.group({
            password: ['', Validators.required],
            confirmPassword: ['', Validators.required]}, { validator: ConfirmPasswordValidator.MatchPassword }); 
    }
    get AllFields() { return this.ForgotForm.controls; }
    Removelabel() { this.errormsg = ''; }
    displayFieldCss(field: string) {

        return {
            'validate': this.isFieldValid(field),
        };
    }
    isFieldValid(field: string) {

        return !this.ForgotForm.get(field).valid && this.ForgotForm.get(field).touched;
    }
    onSubmit() {
       
        let id = this.router1.snapshot.paramMap.get("Id");
        if (this.ForgotForm.valid) {
            this.btndoneDisabled = true; 
            this._loginService.ChangePassword(this.AllFields.password.value,id).subscribe(
                (data) => {
                    this.login = data;
                    if (data[0].Flag == "0") {
                        this.errormsg = data[0].FlagValue;
                        this.btndoneDisabled = false;
                    }
                    else {
                        this.btndoneDisabled = false;
                        this.router.navigate(['/Login']);
                    }
                });
        }
        else {
            this.validateAllFormFields(this.ForgotForm);
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
