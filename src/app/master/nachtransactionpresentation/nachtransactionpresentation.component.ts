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
    bankbind: BankBind;
    bindgrid: BindGridForm;
    bindmaingrid: BindMainGrid;
    bindumrn: BindUMRN;
    bindref: BindRefrence;
    bindumrnonchange: BindUMRNOnchange;
    bindrefonchange: BindRefOnchange;
    i: any;
    public showlabel: boolean;
    showlabel1: boolean;
    showlabel2: boolean;
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




    constructor(private NTPService: NachtransactionporesentationService, private fb: FormBuilder) {

    }

    ngOnInit() {
        this.UMRNRefSet = this.fb.group({

            'UMRNNo': [null],
            'RefrenceNo': [null]

        })

        this.showlabel2 = true;
        this.showlabel = false;
        this.showlabel1 = false;
        this.BindMainGrid();
        //this.BankBind();
        this.CheckUser();
        //this.BindUMRN();
        //this.BindRefrence();
        this.BindOnRowdblClick();

        //this.BindGridForm();
    }

    BankBind() {
        this.showlabel = true;
        alert('NewButton');
        this.showlabel2 = false;
        
        this.showlabel1 = true;
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
        this.showlabel = true;
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
        // let item = JSON.parse(sessionStorage.getItem('User'));
        this.NTPService.BindMainGrid('95').  ///item.UserId
            //subscribe((data) => {
            //});
            subscribe(res => this.bindmaingrid = res, error => console.log(error));
    }
    BindUMRN(date) {
        let item = JSON.parse(sessionStorage.getItem('User'));
        this.NTPService.BindUMRN(item.ReferenceId, item.UserId, date).
            subscribe(res => this.bindumrn = res, error => console.log(error));
        //subscribe((data) => {
        //});
    }
    //BindRefrence() {
    //    this.NTPService.BindRefrence('86', '10', '04/30/2020').
    //        //subscribe((data) => {
    //        //});
    //}
    BindRefrence(date) {
        alert('ButtonRefre');
        let item = JSON.parse(sessionStorage.getItem('User'));
        this.NTPService.BindRefrence(item.ReferenceId, item.UserId, date).
            subscribe(res => this.bindref = res, error => console.log(error));
        //subscribe((data) => {
        //});
    }
    BindOnRowdblClick() {
        let item = JSON.parse(sessionStorage.getItem('User'));
        this.NTPService.BindOnRowdblClick(item.UserId, item.ReferenceId, '300720A13').
            subscribe((data) => {
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
        //this.NTPService.BindUMRNOnchange(item.UserId, item.ReferenceId, refNo).  
        this.NTPService.BindUMRNOnchange(13, item.UserId, refNo).
            subscribe((data) => {
                this.bindumrnonchange = data;
                this.UMRNRefSet.controls['UMRNNo'].setValue(this.bindumrnonchange[0].UMRN);
            });
    }
}