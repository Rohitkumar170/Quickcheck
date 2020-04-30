import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { UrlSegment } from '@angular/router';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { NachtransactionporesentationService } from '../../Services/nachtransactionpresentation/nachtransactionporesentation.service';
import { BankBind, BindGridForm, BindMainGrid, BindUMRN, BindRefrence, BindOnRowdblClick, BindRefOnchange, BindUMRNOnchange} from '../../../Models/nachtransactionpresentation/nachtransactionpresentation';

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
    i: any;
    showlabel: boolean;
    showlabel1: boolean;
    showlabel2: boolean;
   // var EntityId;
    // var UserId;
    bank = 25;
    userid = 86;
    EntityId = 10;
    UsErId = 95;
    entityId = 13;
    refNo = 'rrdtr';


   

    constructor(private NTPService: NachtransactionporesentationService) { }

    ngOnInit() {
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
        alert('NewButton');
        this.showlabel2 = false;
        this.showlabel = true;
        this.showlabel1 = true;
        //let item = JSON.parse(sessionStorage.getItem('User'));
        this.NTPService.BankBind('86','10').
            subscribe(res => this.bankbind = res, error => console.log(error));
           
    }
    CheckUser() {
        //let item = JSON.parse(sessionStorage.getItem('User'));
        this.NTPService.CheckUser('86', '10').
            subscribe((data) => {
                //this.bankbind = data.Table;
                //this.i = Object.entries(this.bankbind)[0][1];
            });
    }

    BindGridForm(bank, userid,EntityId) {
        this.NTPService.BindGridForm('25', '86', '10').
        subscribe(res => this.bindgrid = res, error => console.log(error));
                //this.Databind = data;
           // });
    }
    BindMainGrid() {
        this.NTPService.BindMainGrid('95').
            //subscribe((data) => {
            //});
            subscribe(res => this.bindmaingrid = res, error => console.log(error));
    }
    BindUMRN() {
        var k = '020-04-30';
        this.NTPService.BindUMRN('10', '86', '2020-04-30').
            subscribe(res => this.bindumrn = res, error => console.log(error));
            //subscribe((data) => {
            //});
    }
    //BindRefrence() {
    //    this.NTPService.BindRefrence('86', '10', '04/30/2020').
    //        //subscribe((data) => {
    //        //});
    //}
    BindRefrence() {  
        alert('ButtonRefre');
        this.NTPService.BindRefrence('10', '86', '2020-04-30').
            subscribe(res => this.bindref = res, error => console.log(error));
            //subscribe((data) => {
            //});
    }
    BindOnRowdblClick() {

        this.NTPService.BindOnRowdblClick('95', '13', '300720A13').
            subscribe((data) => {
            });
    }

    BindRefOnchange() {

        this.NTPService.BindRefOnchange('95', '13', '123456789'). 
            subscribe((data) => {
            });
    }
    BindUMRNOnchange(UsErId,entityId,refNo) {

        this.NTPService.BindUMRNOnchange('95', '13', 'rrdtr').  
            subscribe((data) => {
            });
    }
}
