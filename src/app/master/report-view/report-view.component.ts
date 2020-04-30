/// <reference path="../../../models/report-view/bindgrid.ts" />
/// <reference path="../../services/report-vew/report-view.service.ts" />
/// <reference path="../../../models/report-view/binduser.ts" />
import { Component, OnInit } from '@angular/core';
import { formatDate } from '@angular/common';
import { ReportViewService } from '../../services/report-vew/report-view.service';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { BindUser } from '../../../models/report-view/binduser';
import { Bindgrid } from '../../../models/report-view/bindgrid';
import { Router } from '@angular/router';

@Component({
  selector: 'app-report-view',
  templateUrl: './report-view.component.html',
  styleUrls: ['./report-view.component.css']
})
export class ReportViewComponent implements OnInit {

    HeaderArray;
    UMRNUploadform: FormGroup;
    showlabel: boolean;
    dataArray: Array<Bindgrid> = [];
    Preloader: boolean = true;
    length: any;
    binduser: BindUser;
    bindgrid: Bindgrid;
    userId; selectedLevel;
    username; FromDate; ToDate;
  
    constructor(private reportviewService: ReportViewService, private formBuilder: FormBuilder, private route: Router) { }
        
    ngOnInit() {
        let item = JSON.parse(sessionStorage.getItem('User'));
        this.UMRNUploadform = this.formBuilder.group({
        ddluser: new FormControl(),
            FromDate: [''],
            ToDate: ['']
        });
        this.showlabel = false;
        this.Preloader = false;
       // let item = JSON.parse(sessionStorage.getItem('User'));

        this.userId = item.UserId;
        this.BindUser();
    }

    //isFieldValid(field: string) {
    //    return !this.SearchData.get(field).valid && this.SearchData.get(field).touched;for
    //}
    
    BindUser() {
        let item = JSON.parse(sessionStorage.getItem('User'));
        
        this.userId = item.UserId;

        this.reportviewService.BindUser(this.userId).
            subscribe((data) => {
                console.log(data);
                this.binduser = data.Table;

                var y = Object.entries(this.binduser)[0][1];
               // console.log(y);
                //// alert(y.sponsorbankcode);
               // var u = y.UserId;
               // console.log(u);
                //var k = formatDate(new Date(), "yyyy-MM-dd", "en");
             //   this.PostData(k, k, u);
                
            });
       // this.BindUser();
    }

    GetAllData(ddluser, FromDate, ToDate) {
        //alert(ddluser + "   " + FromDate + "   " + Todate);
        let item = JSON.parse(sessionStorage.getItem('User'));
        ////this.username = this.UMRNUploadform.controls['ddluser'].value();
        //this.FromDate = this.UMRNUploadform.controls['FromDate'].value();
        //this.ToDate = this.UMRNUploadform.controls['ToDate'].value();

        //this.username = (<HTMLSelectElement>document.getElementById('ddluser')).value;
        //this.FromDate = (<HTMLSelectElement>document.getElementById('FromDate')).value;
        //this.ToDate = (<HTMLSelectElement>document.getElementById('ToDate')).value;

        this.reportviewService.SearchData(ddluser, FromDate, ToDate, item.UserId).subscribe(
            (data) => {

                this.Preloader = false;
                this.bindgrid = data.Table;
                this.dataArray.push(this.bindgrid);
                // alert(this.dataArray.length);
                //console.log(this.Databind);

            });

    }


   // currentDate = new Date();
    PostData(FromDate, Todate,  userdrop) {

        let item = JSON.parse(sessionStorage.getItem('User'));
       let username = this.UMRNUploadform.controls['ddluser'].value();
       // let username = this.selectedLevel;

        this.reportviewService.SearchData(FromDate, Todate, username, item.UserId).subscribe(
            (data) => {

                this.Preloader = false;
                this.bindgrid = data.Table;
 // alert(this.dataArray.length);
                this.dataArray.push(this.bindgrid);
               
                //console.log(this.Databind);

            });
        if (this.dataArray.length > 0) {
            // alert(this.dataArray.length);
            this.showlabel = true;
        }

    }

}
