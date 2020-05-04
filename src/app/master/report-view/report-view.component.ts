/// <reference path="../../../models/report-view/bindgrid.ts" />
/// <reference path="../../services/report-vew/report-view.service.ts" />
/// <reference path="../../../models/report-view/binduser.ts" />
import { Component, OnInit } from '@angular/core';
import { formatDate } from '@angular/common';
import { ReportViewService } from '../../services/report-vew/report-view.service';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { BindUser } from '../../../models/report-view/binduser';
import { Bindgrid } from '../../../models/report-view/bindgrid';

@Component({
  selector: 'app-report-view',
  templateUrl: './report-view.component.html',
  styleUrls: ['./report-view.component.css']
})
export class ReportViewComponent implements OnInit {

    HeaderArray; UMRNUploadform: FormGroup;
    showlabel: boolean;
    dataArray: Array<Bindgrid> = [];
    Preloader: boolean = true;
    length: any;
    binduser: BindUser;
    bindgrid: Bindgrid;
    userId;
   // UserId: string = "";
    constructor(private reportviewService: ReportViewService, private formBuilder: FormBuilder) { }
        
    ngOnInit() {
        this.showlabel = false;
        this.Preloader = false;

        let item = JSON.parse(sessionStorage.getItem('User'));
        this.userId = item.UserId
        this.reportviewService.BindUser(this.userId).
            subscribe((data) => {
                this.binduser = data.Table;

                var y = Object.entries(this.binduser)[0][1];

                var u = y.UserId;
                var k = formatDate(new Date(), "yyyy-MM-dd", "en");
                this.PostData(u,k, k);

            });


        this.BindUser();
    }
    
    BindUser() {
        let item = JSON.parse(sessionStorage.getItem('User'));
        this.userId = item.UserId
        this.reportviewService.BindUser(this.userId).
            subscribe((data) => {
                this.binduser = data.Table;

            });
      
    }


    currentDate = new Date();
    PostData(alldropdown, FromDate, Todate) {

        let item = JSON.parse(sessionStorage.getItem('User'));
        //let username = this.UMRNUploadform.controls['ddluser'].value();
        //let item = JSON.parse(sessionStorage.getItem('User'));
        this.userId = item.UserId;
        this.Preloader = true;
        var jasondata = {
            "FromDate": FromDate,
            "Todate": Todate,
            "alldropdown": alldropdown,
            "UserId": this.userId
            
        }
        this.reportviewService.SearchData(jasondata).subscribe(
            (data) => {
                this.Preloader = false;
                console.log(data);
                this.bindgrid = data.Table;
               // this.dataArray.push(this.bindgrid);
                // alert(this.dataArray.length);
                //console.log(this.Databind);


            });
        if (this.dataArray.length > 0) {
            // alert(this.dataArray.length);
            this.showlabel = true;
        }

    }


    ConvertToCSV(objArray) {
       
        this.HeaderArray = {
            SrNo: "SrNo", Refrence1: "Refrence", CreatedOn: "Created On", UpdatedOn: "Updated On",
            createdBy: "Created By", UpdatedBy: "Updated By", FileUpdatedCount: "FileUpdated Count", BankValidation: "BankValidation"
            ,AcValidation: "AcValidation", SavedCount: "Saved Count",
            EditCount: "Edit Count", entityName: "Entity Name"

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

        
        var csvData = this.ConvertToCSV(JSON.stringify(this.bindgrid));

            
          
            var a = document.createElement("a");
            a.setAttribute('style', 'display:none;');
            document.body.appendChild(a);
            var blob = new Blob([csvData], { type: 'text/csv' });
            var url = window.URL.createObjectURL(blob);
            a.href = url;
            a.download = 'Reportview_Results.csv';/* your file name*/
            a.click();
            return 'success';
        
    
    }

}
