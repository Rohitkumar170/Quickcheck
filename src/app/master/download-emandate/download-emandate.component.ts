
import { Component, OnInit } from '@angular/core';
import { DownloadEmandateServiceService } from '../../services/downloademandate/download-emandate-service.service';
import { Router } from '@angular/router';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { UrlSegment } from '@angular/router';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Bankdetails, DownloadEmandateclass } from '../../../Models/DownloadEmandate/DownloadEmandate';
import { formatDate } from '@angular/common';

@Component({
    selector: 'app-download-emandate',
    templateUrl: './download-emandate.component.html',
    styleUrls: ['./download-emandate.component.css']
})

export class DownloadEmandateComponent implements OnInit {
    dataArray: Array<DownloadEmandateclass> = [];
    SponserBankCode: any;
    HeaderArray;
    bankbind: Bankdetails;
    Databind: DownloadEmandateclass;
    dmandateForm: FormGroup;
    todate: Date;
    fromdate: Date;
    i: any;
    SelectionStatusOfMutants = [];
    checkFlag: number = 0;
    Ischecked: number = 0;
    IsMandateID: string;
    CheckedCount: number = 0;
    UncheckedCount: number = 0;
    Preloader: boolean = true;
   // public errormsg: any = "Please Select Mandate";
    public errormsg: any;
    showlabel: boolean;
    length: any;
    //BindGridData: BindGridData;
    constructor(private DEService: DownloadEmandateServiceService, fb: FormBuilder) {
        this.fromdate = new Date();
        this.todate = new Date();
        //this.BindGridData = new BindGridData();
        this.dmandateForm = fb.group({


            'todate': [null],
            'fromdate': [null],
            // will use the property in html page
        })
    }


    ngOnInit() {
        this.Preloader = false;
        this.showlabel = false;
        let item = JSON.parse(sessionStorage.getItem('User'));
        this.DEService.BankBind(item.UserId).
            subscribe((data) => {
                this.bankbind = data.Table;
                this.i = Object.entries(this.bankbind)[0][1];
                this.SponserBankCode = this.i.sponsorbankcode;
                var u = this.SponserBankCode;
                var k = formatDate(new Date(), "yyyy-MM-dd", "en");
                this.SearchFunction(k, k, u);
            });

        this.BankBind();
    }
    Removelabel() { this.errormsg = ''; }

    BankBind() {
        let item = JSON.parse(sessionStorage.getItem('User'));
        this.DEService.BankBind(item.UserId).
            subscribe((data) => {
                this.bankbind = data.Table;
                this.i = Object.entries(this.bankbind)[0][1];
            });
    }
    SearchFunction(FromDate, ToDate, Bank) {
        this.Preloader = true;
        let item = JSON.parse(sessionStorage.getItem('User'));
        this.DEService.BindGridData(FromDate, ToDate, Bank, item.UserId).subscribe(
            (data) => {
                this.Preloader = false;
                this.Databind = data;
                this.dataArray.push(this.Databind);
            });
       
        if (this.dataArray.length > 0) {
           
            this.showlabel = true;
        }
    }

    toggleSelect = function (event) {
        this.all = event.target.checked;
        this.Databind.forEach(function (item) {
            item.selected = event.target.checked;
        });

        this.checkFlag = 1;

        if (event.target.checked) {
            this.Ischecked = 1;
        }
        else {
            this.Ischecked = 0;
        }


    }

    onChange(event, item) {
        this.checkFlag = 0;
        this.IsMandateID = item.mandateid;
        if (event.target.checked) {
            this.SelectionStatusOfMutants.push(item);
            this.Ischecked = 1;
            this.CheckedCount++;

        }
        else {
            this.SelectionStatusOfMutants.pop();
            this.UncheckedCount++;
            if (this.UncheckedCount == this.CheckedCount) {
                this.Ischecked = 0;
            }
        }
    }

    ConvertToCSV(objArray) {
        this.HeaderArray = {
            DebtorName: "Debtor Name",
            InstructedAgentMemberName:"InstructedAgentMemberName",
            ConsumerReferenceNumber: "ConsumerReferenceNumber",
            DebtorAccountNumber: "DebtorAccountNumber",
            DebtorAgentID: "DebtorAgentID",
            Collection: "Collection",
            MaximumAmount: "MaximumAmount",
            ServiceProvider: "ServiceProvider",
            Frequency: "Frequency",
            DebtorAccountType: "DebtorAccountType",
            CreationDateTime:"CreationDateTime"
        }
        var array = typeof objArray != 'object' ? JSON.parse(objArray) : objArray;
        var str = '';
        var row = "";

        for (var index in objArray[0]) {
            //Now convert each value to string and comma-separated
            row += index + ',';
        }
        row = row.slice(0, -1);
        str += row + '\r\n';

        for (var i = 0; i < array.length; i++) {
            var line = '';

            if (i == 0) {
                for (var index in this.HeaderArray) {
                    if (line != '') line += ','

                    line += this.HeaderArray[index];
                }
                str += line + '\r\n';
            }

            var line = '';
            for (var index in array[i]) {
                if (line != '') line += ','

                line += array[i][index];
            }
            str += line + '\r\n';
        }
        return str;
    }
 
    download() {

        if (this.Ischecked == 1) {
            if (this.checkFlag == 0) {
                var csvData = this.ConvertToCSV(JSON.stringify(this.SelectionStatusOfMutants));
            }
            else {
                var csvData = this.ConvertToCSV(JSON.stringify(this.Databind));

            }
            var a = document.createElement("a");
            a.setAttribute('style', 'display:none;');
            document.body.appendChild(a);
            var blob = new Blob([csvData], { type: 'text/csv' });
            var url = window.URL.createObjectURL(blob);
            a.href = url;
            a.download = 'User_Results.csv';/* your file name*/
            a.click();
            return 'success';
        }
        else {
            this.errormsg = "Please Select Mandate !!";
        }
    }

}
