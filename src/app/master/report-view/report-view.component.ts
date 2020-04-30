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

    constructor(private reportviewService: ReportViewService, private formBuilder: FormBuilder) { }
        
    ngOnInit() {
        this.showlabel = false;
        this.Preloader = false;
        this.BindUser();
    }
    
    BindUser() {
        let item = JSON.parse(sessionStorage.getItem('User'));

        //var jasondata = {
        //    "UserId": item.UserId
        //}
        this.userId = item.UserId

        this.reportviewService.BindUser(this.userId).
            subscribe((data) => {
                this.binduser = data.Table;

                var y = Object.entries(this.binduser)[0][1];

                //// alert(y.sponsorbankcode);
                var u = y.UserId;
                var k = formatDate(new Date(), "yyyy-MM-dd", "en");
                this.PostData(k, k, u);
                
            });
       // this.BindUser();
    }


    currentDate = new Date();
    PostData(FromDate, Todate,  userdrop) {

        let item = JSON.parse(sessionStorage.getItem('User'));
        let username = this.UMRNUploadform.controls['ddluser'].value();

        this.reportviewService.SearchData(FromDate, Todate, username, item.UserId).subscribe(
            (data) => {
                this.Preloader = false;
                this.bindgrid = data.Table;
                this.dataArray.push(this.bindgrid);
                // alert(this.dataArray.length);
                //console.log(this.Databind);


            });
        if (this.dataArray.length > 0) {
            // alert(this.dataArray.length);
            this.showlabel = true;
        }

    }

}
