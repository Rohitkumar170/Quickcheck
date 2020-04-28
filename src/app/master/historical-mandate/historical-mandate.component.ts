import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { HistoricalMandateClass } from '../../../models/historical-mandate/historical-mandate-class';
import { HistoricalMandateServiceService } from '../../services/historical-mandate/historical-mandate-service.service';
import { count } from 'rxjs/operators';


@Component({
    selector: 'app-historical-mandate',
    templateUrl: './historical-mandate.component.html',
    styleUrls: ['./historical-mandate.component.css']
})
export class HistoricalMandateComponent implements OnInit {
    HistoricalMandateForm: FormGroup; HeaderArray;
    BindAllData: HistoricalMandateClass; TotalCount; dataArray: Array<HistoricalMandateClass> = [];
    Preloader: boolean = true;
   // length: any;
    constructor(private HMService: HistoricalMandateServiceService, private formBuilder: FormBuilder) {

    }
    // CurrentDate = new Date();
    ngOnInit() {
        this.HistoricalMandateForm = this.formBuilder.group({
            FromDate: [''],
            ToDate: ['']
        });
        this.Preloader = false;
    }

    SearchFunction(FromDate, ToDate) {
        this.Preloader = true;
        let item = JSON.parse(sessionStorage.getItem('User'));
        if (FromDate != "" && ToDate != "") {
            this.HMService.BindGridData(FromDate, ToDate, item.UserId).subscribe(
                (data) => {
                    this.Preloader = false;
                    this.BindAllData = data;
                    let json = JSON.stringify(this.BindAllData);
                    var CountRecordArray = typeof json != 'object' ? JSON.parse(json) : json;
                    this.TotalCount = CountRecordArray.length;
                });
           
        }
    }
    doubleClick(data: any) {
        this.dataArray.push(data);
        let json = JSON.stringify(data);
        alert(json);
        console.log(data.MandateFreshId);

    }

    ConvertToCSV(objArray) {
        this.HeaderArray = {
            MandateStatus: "Mandate Status", SendToBankDate: "Send To Bank Date", MandateFreshId: "Mandate ID", mandateMode: "mandate Mode",
            AutoRejectReason: "AutoRejectReason", updatedon: "updatedon", username: "username", UpdateBy: "UpdateBy", Enach: "Enach",
            IsMobileData: "IsMobileData", RejectedReason: "RejectedReason", REJECTED: "REJECTED", CreatedOn: "CreatedOn", is_enach_live: "is_enach_live",
            IsScan: "IsScan", JPGPath: "JPGPath", TIPPath: "TIPPath", IsPrint: "IsPrint", mandateid: "mandateid", status: "status", Amount: "Amount",
            Code: "Code", BankName: "BankName", DateOnMandate: "DateOnMandate", AcNo: "AcNo", Refrence1: "Refrence1", AcceptRefNo: "AcceptRefNo",
            NPCIErrorDesc: "NPCIErrorDesc", FromDate: "FromDate", Customer1: "Customer1", debittype: "debittype", Frequency: "Frequency", Monthly: "Monthly",
            ToDebit: "ToDebit", NPCIMsgId: "NPCIMsgId", MSGId: "MSGId", UMRN: "UMRN", AggregatorValue: "AggregatorValue", Amount_Numeric: "Amount_Numeric",
            SponsorBankCode: "SponsorBankCode", PhoneNumber: "PhoneNumber", EmailId: "EmailId", EmandateType: "EmandateType", ActivityId: "ActivityId",
            Refrence2: "Refrence2"
        }
        var array = typeof objArray != 'object' ? JSON.parse(objArray) : objArray;
        var str = '';
        var row = "";

        for (var index in objArray[0]) {
            //Now convert each value to string and comma-separated
            row += index + ',';
        }
        row = row.slice(0, -1);
        //append Label row with line break
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
        var csvData = this.ConvertToCSV(JSON.stringify(this.BindAllData));
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

}
