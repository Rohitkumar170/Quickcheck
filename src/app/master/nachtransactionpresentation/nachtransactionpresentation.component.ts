import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { UrlSegment } from '@angular/router';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { NachtransactionporesentationService } from '../../Services/nachtransactionpresentation/nachtransactionporesentation.service';
import { BankBind, BindGridForm, BindMainGrid, BindUMRN, BindRefrence, BindOnRowdblClick, BindRefOnchange, BindUMRNOnchange} from '../../../models/nachtransactionpresentation/nachtransactionpresentation';
@Component({
    selector: 'app-nachtransactionpresentation',
    templateUrl: './nachtransactionpresentation.component.html',
    styleUrls: ['./nachtransactionpresentation.component.css']
})
export class NachtransactionpresentationComponent implements OnInit {
    //bankbind: BankBind;
    Allumrn: FormGroup;
    bankbind: BankBind;
    bindgrid: BindGridForm;
    bindmaingrid: BindMainGrid;
    bindumrn: BindUMRN;
    bindref: BindRefrence;
    bindumrnonchange: BindUMRNOnchange;
    bindrefonchange: BindRefOnchange;
    bindrowdouble:BindOnRowdblClick;
    i: any;
    public showlabel: boolean;
    public showlabel1: boolean;
    public showlabel2: boolean;
    public showlabel3:boolean;
    UMRNRefSet: FormGroup;
    // var EntityId;
    // var UserId;
    userid = 86;
    EntityId = 13;
    UsErId = 95;
    entityId = 13;
    refNo = 'rrdtr';
    public IFSC: any;
    public AccountNumber: any;
    public SponsorBankcode: any;
    public UtilityCode: any;
    public UserName: any;
    temp:number;




    constructor(private NTPService: NachtransactionporesentationService, private fb: FormBuilder) {

    }

    ngOnInit() {
        this.UMRNRefSet = this.fb.group({
            UMRNNo: new FormControl(),
            RefrenceNo: new FormControl()
        })
        this.temp=1;
        this.showlabel2 = true;
        this.showlabel = false;
        this.showlabel1 = false;
        this.showlabel3= false;
        this.BindMainGrid();
        //this.BankBind();
       //this.CheckUser();
        //this.BindUMRN();
        //this.BindRefrence();
        //this.BindOnRowdblClick();
       this.UMRNRefSet.controls['UMRNNo'].setValue(0);
       this.UMRNRefSet.controls['RefrenceNo'].setValue(0);
        this.Allumrn = this.fb.group({
            AccountNumber:new FormControl(),
            BankValue:new FormControl(),
            Searchvalidation: ['', Validators.required]
            
        });




        //this.BindGridForm();
    }
    isFieldValid(field: string) {
        return !this.Allumrn.get(field).valid && this.Allumrn.get(field).touched;
    }
    
    displayFieldCss(field: string) {
        return {
            'validate': this.isFieldValid(field),
        };
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




    BankBind() {
        this.showlabel = true;
        this.showlabel2 = false;
        this.showlabel1 = true;
        this.showlabel3= true;
        let item = JSON.parse(sessionStorage.getItem('User'));

        this.NTPService.BankBind(item.UserId, item.ReferenceId).
            subscribe(res => this.bankbind = res, error => console.log(error));

    }
    CheckUser() {
        let item = JSON.parse(sessionStorage.getItem('User'));
        this.NTPService.CheckUser(item.UserId, item.ReferenceId).
            subscribe((data) => {
                //this.bankbind = data.Table;
                //this.i = Object.entries(this.bankbind)[0][1];NachTransactionBindRow
            });
    }

    BindGridForm(bank) {

        let item = JSON.parse(sessionStorage.getItem('User'));
        this.NTPService.BindGridForm(bank, item.UserId, item.ReferenceId).
            subscribe((data) => {
                this.bindgrid = data;
                this.IFSC = data[0].IFSC;
                this.AccountNumber = data[0].AccountNumber;
                this.SponsorBankcode = data[0].SponsorBankcode;
                this.UtilityCode = data[0].UtilityCode;
                this.UserName = data[0].UserName;

                //this.Databind = data;
                // });25
            });
    }
    BindMainGrid() {
        let item = JSON.parse(sessionStorage.getItem('User'));
        this.NTPService.BindMainGrid(item.UserId).  ///item.UserId
            //subscribe((data) => {
            //});
            subscribe(res => this.bindmaingrid = res, error => console.log(error));
    }
    BindUMRN(date) {
        if (this.Allumrn.valid) {


        let item = JSON.parse(sessionStorage.getItem('User'));
        this.NTPService.BindUMRN(item.ReferenceId, item.UserId, date).
            subscribe(res => this.bindumrn = res, error => console.log(error));
        //subscribe((data) => {
        //});
        }
        else
        {

            this.validateAllFormFields(this.Allumrn);

        }
    }
    //BindRefrence() {
    //    this.NTPService.BindRefrence('86', '10', '04/30/2020').
    //        //subscribe((data) => {
    //        //});
    //}
    BindRefrence(date) {
  
        let item = JSON.parse(sessionStorage.getItem('User'));
        this.NTPService.BindRefrence(item.ReferenceId, item.UserId, date).
            subscribe(res => this.bindref = res, error => console.log(error));
        //subscribe((data) => {
        //});
    }
    BindOnRowdblClick() {
        this.AccountNumber="";
        this.UtilityCode="";
        this.IFSC="";
        this.UserName="";
        this.SponsorBankcode="";
        // this.SponsorBankCodeName="";
        this.showlabel = true;
        this.showlabel2 = false;
        this.showlabel1 = true;
        this.showlabel3 = true;
        let item = JSON.parse(sessionStorage.getItem('User'));
        this.NTPService.BindOnRowdblClick(13, 94, '260320_A11').
        // this.NTPService.BindOnRowdblClick(item.UserId, item.ReferenceId, '260320_A11').
            // subscribe((data) => {
            // });
            // subscribe(res => this.bindrowdouble = res, error => console.log(error));
            subscribe((data) => {
                this.bindrowdouble = data;
            this.AccountNumber=this.bindrowdouble[0].AccountNumber;
            this.UtilityCode=this.bindrowdouble[0].UtilityCode;
            this.IFSC=this.bindrowdouble[0].IFSC;
            this.SponsorBankcode=this.bindrowdouble[0].SponsorBankcode
            this.UserName=this.bindrowdouble[0].createdby;
        this.Allumrn.controls['Searchvalidation'].setValue(this.bindrowdouble[0].Date);
        // console.log(this.bindrowdouble[0].SponsorBankName);
        // this.Allumrn.controls['BankValue'].setValue(286); //this.bindrowdouble[0].SponsorBankName
            });
    }

    BindRefOnchange() {
        let item = JSON.parse(sessionStorage.getItem('User'));
        let umrn = this.UMRNRefSet.value.UMRNNo;
        this.NTPService.BindRefOnchange(item.UserId, item.ReferenceId, umrn).
            subscribe((data) => {
                this.bindrefonchange = data;
                this.UMRNRefSet.controls['RefrenceNo'].setValue(this.bindrefonchange[0].Refrence1);
            });



    }
    BindUMRNOnchange() {
        let item = JSON.parse(sessionStorage.getItem('User'));
        let refNo = this.UMRNRefSet.value.RefrenceNo;
        this.NTPService.BindUMRNOnchange(item.UserId, item.ReferenceId, refNo).  
        // this.NTPService.BindUMRNOnchange(13, item.UserId, refNo).
            subscribe((data) => {
                this.bindumrnonchange = data;
                // console.log(this.bindumrnonchange[0].UMRN);
                this.UMRNRefSet.controls['UMRNNo'].setValue(this.bindumrnonchange[0].UMRN);
                //this.UserForm.controls['bankval'].setValue(this.userdata[0].BankValidationUserCount);
            });
    }
}