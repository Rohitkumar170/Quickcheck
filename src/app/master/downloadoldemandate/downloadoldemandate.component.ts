import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { DownloadoldemandateService } from '../../Services/downloadoldemandate/downloadoldemandate.service';
import { Bankdetails } from '../../../Models/OldEmandate/Bankbind';
import { Searchdetails } from '../../../Models/OldEmandate/SearchData';
//import { Variable } from '@angular/compiler/src/render3/r3_ast';
import { formatDate } from '@angular/common';
//import { Console } from '@angular/core/src/console';
//import { element } from '@angular/core/src/render3';

@Component({
    selector: 'app-downloadoldemandate',
    templateUrl: './downloadoldemandate.component.html',
    styleUrls: ['./downloadoldemandate.component.css']
})
export class DownloadoldemandateComponent implements OnInit {
    showlabel: boolean;
    length: any;
    dataArray: Array<Searchdetails> = [];
    bankbind: Bankdetails;
    Databind: Searchdetails;
    public errormsg: any;
    Preloader: boolean = true;
    //nameId: string;
    i: any;
   // public inEditMode = false;
    //selectedAll: any;
    HeaderArray;
    SelectionStatusOfMutants = [];
    checkFlag: number = 0;
    Ischecked: number = 0;
    CheckedCount: number = 0;
    UncheckedCount: number = 0;
    //IsMandateID: string;
    constructor(public _downloadservice: DownloadoldemandateService) { }

    ngOnInit() {
        this.showlabel = false;
        this.Preloader = false;
        let item = JSON.parse(sessionStorage.getItem('User'));
       // console.log(item.UserId)
        this._downloadservice.BankBind(item.UserId).
            subscribe((data) => {
                this.bankbind = data.Table;

                var y = Object.entries(this.bankbind)[0][1];

               // alert(y.sponsorbankcode);
                var u = y.sponsorbankcode;
                 var k = formatDate(new Date(), "yyyy-MM-dd", "en");
                this.PostData(k,k, u);
            });

        this.BankBind();



    }
    currentDate = new Date();
    PostData(FromDate, Todate, bankdrop) {
        this.Preloader = true;
       // alert("Comp" + FromDate + " " + Todate + " " + bankdrop);
        let item = JSON.parse(sessionStorage.getItem('User'));
       // console.log(item.UserId)
        this._downloadservice.SearchData(FromDate, Todate, bankdrop, item.UserId).subscribe(
            (data) => {
                this.Preloader = false;
                this.Databind = data;
                this.dataArray.push(this.Databind);
               // alert(this.dataArray.length);
                //console.log(this.Databind);
               

            });
        if (this.dataArray.length > 0) {
           // alert(this.dataArray.length);
            this.showlabel = true;
        }


    }
    Removelabel() { this.errormsg = ''; }
   
    BankBind() {
        let item = JSON.parse(sessionStorage.getItem('User'));
        //console.log(item.UserId)
        this._downloadservice.BankBind(item.UserId).
            subscribe((data) => {
                this.bankbind = data.Table;

                this.i = Object.entries(this.bankbind)[0][1];

                // alert(this.i.sponsorbankcode);
           
               // console.log(this.bankbind);


            });

    }

    toggleSelect = function (event) {
        //toggleSelect(event) {
        // var SelectionStatusOfMutants = [];
        this.all = event.target.checked;
        this.Databind.forEach(function (item) {
            // console.log(item);
            item.selected = event.target.checked;
            // this.onChange(event, item);

        });

        this.checkFlag = 1;

        if (event.target.checked) {
            this.Ischecked = 1;
            //  this.Isallcheck = 1;
        }
        else {
            this.Ischecked = 0;
        }


    }

    onChange(event, item) {
     // console.log(item);
        //var element = <HTMLInputElement>document.getElementById("is3dCheckBox");
        //var isChecked = element.checked;
        //if (count == '') {
        this.checkFlag = 0;
       // this.IsMandateID = item.mandateid;
        //var CheckedCount = 0, UncheckedCount = 0;
        
        if (event.target.checked) {
            this.SelectionStatusOfMutants.push(item);
           // console.log(this.SelectionStatusOfMutants);
           // alert('checked')
            this.Ischecked = 1;
            this.CheckedCount++;
            //this.dataArray.push(item);
            //console.log(this.dataArray)

        }
        else {
          //  alert('not checked')
            this.SelectionStatusOfMutants.pop();
            this.UncheckedCount++;
            if (this.UncheckedCount == this.CheckedCount) {
                this.Ischecked = 0;
            }
           
        }



     }
        
    


    ConvertToCSV(objArray) {
        this.HeaderArray = {
            DebtorName: "Debtor Name", InstructedAgentMemberName: "Instructed Agent Member Name", ConsumerReferenceNumber: "Consumer Reference Number", DebtorAccountNumber: "Debtor Account Number",
            DebtorAgentID: "Debtor Agent ID", Collection: "Collection Amount", MaximumAmount: "Maximum Amount", ServiceProvider: "Service Provider", Frequency: "Frequency",
            DebtorAccountType: "Debtor Account Type", CreationDateTime: "Creation Date Time"

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

      // alert(this.Ischecked);
        //if (this.Ischecked == 1) {
        //  //  alert("Selecetd");

        //}
        //else {
        //   // alert("Not selected any checkbox");
        //    this.errormsg = "Please Select Mandate !!";
        //}
        //console.log(this.checkFlag);
        if (this.Ischecked == 1) {
            if (this.checkFlag == 0) {
                var csvData = this.ConvertToCSV(JSON.stringify(this.SelectionStatusOfMutants));
            }
            else {
                var csvData = this.ConvertToCSV(JSON.stringify(this.Databind));

            }
            // var csvData = this.ConvertToCSV(JSON.stringify(this.Databind));
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
