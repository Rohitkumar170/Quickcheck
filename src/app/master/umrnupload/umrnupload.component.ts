import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { UrlSegment } from '@angular/router';
import { UmrnUploadService } from '../../services/umrnupload/umrn-upload.service';
import { UMRNUpload } from '../../../models/umrnupload/maingrid';
import { MainGridDetails } from '../../../models/umrnupload/maingriddetails';
import { GridSuccess } from '../../../models/umrnupload/gridsuccess';
import { GridUnsuccess } from '../../../models/umrnupload/gridunsuccess';
import { Location } from '@angular/common';

import { count } from 'rxjs/operators';


@Component({
  selector: 'app-umrnupload',
  templateUrl: './umrnupload.component.html',
  styleUrls: ['./umrnupload.component.css']
})
export class UmrnuploadComponent implements OnInit {
 
    HeaderArray; UMRNUploadform: FormGroup;
    length: any;
    Preloader: boolean = true;
    //public tbldiv1: boolean = false;
    //public tbldiv2: boolean = false;
    //public tbldiv3: boolean = false;
    //public tbldiv4: boolean = false;

    showModalsave: boolean
    @ViewChild('fileInput') fileInput;  
    umrnupload: UMRNUpload; dataArray: Array<UMRNUpload> = []; UploadHeaderId; maingriddetails: MainGridDetails; grdsuccess: GridSuccess; grdunsuccess: GridUnsuccess;
   
    constructor(private _UmrnUploadService: UmrnUploadService) { }

    ngOnInit() {
        this.BindGrid();
    }

    hide() {
     
        this.showModalsave = false;
    }
    BindGrid() {

        //this.tbldiv1 = true;
        //this.tbldiv2 = false;
        //this.tbldiv3 = false;
        //this.tbldiv4 = false;
        this._UmrnUploadService.BindGrid().
            subscribe((data) => {
                this.umrnupload = data.Table;
                this.Preloader = false;
            });
      

    }

    doubleClick(data: any) {
       
        this.dataArray.push(data);
        //  let UploadHeaderId = JSON.stringify(data.UploadHeaderId);
        this.UploadHeaderId = data.UploadHeaderId
      
      

        

        this.BindOnRowdblClick();
    }

    BindOnRowdblClick() {

        this.Preloader = true;
        this._UmrnUploadService.BindOnRowdblClick(this.UploadHeaderId).
            subscribe((data) => {
                this.Preloader = false;
                //this.tbldiv1 = false;
                //this.tbldiv2 = true;
                //this.tbldiv3 = true;
                //this.tbldiv4 = true;
                this.grdunsuccess = data.Table;
                this.grdsuccess = data.Table1;
                this.maingriddetails = data.Table2;
                var TotalCount = data.Table2.length;
                var successCount = data.Table1.length;
                var UnsuccessCount = data.Table.length;
                document.getElementById('lblTotalCount').innerHTML = 'Total Records: ' + TotalCount;
                document.getElementById('lblsuccessCount').innerHTML = 'Validated Records : ' + successCount;
                document.getElementById('lblUnsuccessCount').innerHTML = 'Rejected Records : ' + UnsuccessCount;
                var tbldiv1 = <HTMLFormElement>document.getElementById('tbldiv1');
                tbldiv1.style.display = 'none';
                var tbldiv2 = <HTMLFormElement>document.getElementById('tbldiv2');
                tbldiv2.style.display = 'block';

                var tbldiv3 = <HTMLFormElement>document.getElementById('tbldiv3');
                tbldiv3.style.display = 'block';

                var tbldiv4 = <HTMLFormElement>document.getElementById('tbldiv4');
                tbldiv4.style.display = 'block';
                var btndownload = <HTMLFormElement>document.getElementById('btndownload');
                btndownload.style.display = 'block';
                var divsave = <HTMLFormElement>document.getElementById('divsave');
                divsave.style.display = 'none';
            });
        

    }

    

    ConvertToCSV(objArray) {
        debugger;
        var array = typeof objArray != 'object' ? JSON.parse(objArray) : objArray;
        var str = '';
        var row = "";

        //for (var index in objArray[0]) {
        //    //Now convert each value to string and comma-separated
        //    row += index + ',';
        //}
       // row = row.slice(0, -1);
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

    



    downloadMaingriddetails() {

        this.HeaderArray = [];
        this.HeaderArray = {
            legacyUploadedID: "Legacy Upload Id", UMRN: "UMRN", Amount: "Amount", CustomerName: "Customer Name", Refrence: "Reference",
            FromDate: "From Date", ToDate: "To Date", AccountType: "Account Type", AccountNo: "Account Number", IFSC: "IFSC"
           
        }
        var csvData = this.ConvertToCSV(JSON.stringify(this.maingriddetails));
        var a = document.createElement("a");
        a.setAttribute('style', 'display:none;');
        document.body.appendChild(a);
        var blob = new Blob([csvData], { type: 'text/csv' });
        var url = window.URL.createObjectURL(blob);
        a.href = url;
        a.download = 'UMRN_Grid_details.csv';
        a.click();
        return 'success';
    }


    downloadgrdsuccess() {

        this.HeaderArray = [];
        this.HeaderArray = {
            UMRN: "UMRN", Amount: "Amount", CustomerName: "Customer Name", Refrence: "Reference",
            FromDate: "From Date", ToDate: "To Date", AccountType: "Account Type", AccountNo: "Account Number", IFSC: "IFSC"

        }

        var csvData = this.ConvertToCSV(JSON.stringify(this.grdsuccess));
        var a = document.createElement("a");
        a.setAttribute('style', 'display:none;');
        document.body.appendChild(a);
        var blob = new Blob([csvData], { type: 'text/csv' });
        var url = window.URL.createObjectURL(blob);
        a.href = url;
        a.download = 'UMRN_Success.csv';
        a.click();
        return 'success';
    }

    downloadgrdUnsuccess() {
        this.HeaderArray = [];
        this.HeaderArray = {
            UMRN: "UMRN", Amount: "Amount", CustomerName: "Customer Name", Refrence: "Reference",
            FromDate: "From Date", ToDate: "To Date", AccountType: "Account Type", AccountNo: "Account Number", IFSC: "IFSC", Remark: "Remark"

        }
        var csvData = this.ConvertToCSV(JSON.stringify(this.grdunsuccess));
        var a = document.createElement("a");
        a.setAttribute('style', 'display:none;');
        document.body.appendChild(a);
        var blob = new Blob([csvData], { type: 'text/csv' });
        var url = window.URL.createObjectURL(blob);
        a.href = url;
        a.download = 'UMRN_UnSuccess.csv';
        a.click();
        return 'success';
    }
    btnBack_click(e) {
       
        //var tbldiv2 = <HTMLFormElement>document.getElementById('tbldiv2');
        //tbldiv2.style.display = 'none';

        //var tbldiv3 = <HTMLFormElement>document.getElementById('tbldiv3');
        //tbldiv3.style.display = 'none';

        //var tbldiv4 = <HTMLFormElement>document.getElementById('tbldiv4');
        //tbldiv4.style.display = 'none';
        //this.BindGrid();
        //var tbldiv1 = <HTMLFormElement>document.getElementById('tbldiv1');
        //tbldiv1.style.display = 'block';
        window.location.reload();
    }

    downloadHeaderGrid() {
        this.HeaderArray = [];
        this.HeaderArray = {
            UploadNo: "Upload No", CreatedOn: "Created On", UserName: "User Name", TotalCount: "Total Count",
            SuccessCount: "Success Count"

        }
        var csvData = this.ConvertToCSV(JSON.stringify(this.umrnupload));
        var a = document.createElement("a");
        a.setAttribute('style', 'display:none;');
        document.body.appendChild(a);
        var blob = new Blob([csvData], { type: 'text/csv' });
        var url = window.URL.createObjectURL(blob);
        a.href = url;
        a.download = 'UMRN_Upload_List.csv';
        a.click();
        return 'success';
    }

    btnNew_click(e) {

        //this.tbldiv1 = false;
        //this.tbldiv2 = false;
        //this.tbldiv3 = false;
        //this.tbldiv4 = false;
        var tbldiv1 = <HTMLFormElement>document.getElementById('tbldiv1');
        tbldiv1.style.display = 'none';
        var tbldiv2 = <HTMLFormElement>document.getElementById('tbldiv2');
        tbldiv2.style.display = 'none';

        var tbldiv3 = <HTMLFormElement>document.getElementById('tbldiv3');
        tbldiv3.style.display = 'none';

        var tbldiv4 = <HTMLFormElement>document.getElementById('tbldiv4');
        tbldiv4.style.display = 'none';

        var btndownload = <HTMLFormElement>document.getElementById('btndownload');
        btndownload.style.display = 'block';

        var btnupload = <HTMLFormElement>document.getElementById('btnupload');
        btnupload.style.display = 'block';

        var btnback = <HTMLFormElement>document.getElementById('btnback');
        btnback.style.display = 'block';
        var btnNew = <HTMLFormElement>document.getElementById('btnNew');
        btnNew.style.display = 'none';
    }
    uploadUMRN() {
        let formData = new FormData();
        formData.append('upload', this.fileInput.nativeElement.files[0])
      //  alert('k')
        //this.service.UploadExcel(formData).subscribe(result => {
        //    this.message = result.toString();
        //    this.loadAllUser();
        //});
        this.Preloader = true;
        this._UmrnUploadService.UploadExcel(formData).
            subscribe((data) => {
                this.Preloader = false;
                this.grdunsuccess = data.Table;
                this.grdsuccess = data.Table1;
                this.maingriddetails = data.Table2;
                var TotalCount = data.Table2.length;
                var successCount = data.Table1.length;
                var UnsuccessCount = data.Table.length;

                document.getElementById('lblTotalCount').innerHTML = 'Total Records: ' + TotalCount;
                document.getElementById('lblsuccessCount').innerHTML = 'Validated Records : ' + successCount;
                document.getElementById('lblUnsuccessCount').innerHTML = 'Rejected Records : ' + UnsuccessCount;
                var tbldiv1 = <HTMLFormElement>document.getElementById('tbldiv1');
                tbldiv1.style.display = 'none';
                var tbldiv2 = <HTMLFormElement>document.getElementById('tbldiv2');
                tbldiv2.style.display = 'block';

                var tbldiv3 = <HTMLFormElement>document.getElementById('tbldiv3');
                tbldiv3.style.display = 'block';

                var tbldiv4 = <HTMLFormElement>document.getElementById('tbldiv4');
                tbldiv4.style.display = 'block';
                //this.tbldiv2 = true;
                //this.tbldiv3 = true;
                //this.tbldiv4 = true;

                var btndownload = <HTMLFormElement>document.getElementById('btndownload');
                btndownload.style.display = 'block';

                var divsave = <HTMLFormElement>document.getElementById('divsave');
                divsave.style.display = 'block';
                var btnNew = <HTMLFormElement>document.getElementById('btnNew');
                btnNew.style.display = 'none';
                document.getElementById('lbltotalrecordcount').innerHTML =  TotalCount;
                document.getElementById('lblvalidatedcount').innerHTML =   successCount;
                document.getElementById('lblUploaderID').innerHTML = this.maingriddetails[0].legacyUploadedID;
                document.getElementById('lblfilename').innerHTML = data.FileName;

            });
    }  

    btnsave_click(e) {
        

        var UploadHeaderId = document.getElementById('lblUploaderID').innerHTML;
        var TotalCount = document.getElementById('lbltotalrecordcount').innerHTML;
        var validatedcount = document.getElementById('lblvalidatedcount').innerHTML;
        var FileName = document.getElementById('lblfilename').innerHTML;
        this.Preloader = true;

        this._UmrnUploadService.btnSave_Click(UploadHeaderId, TotalCount, validatedcount, FileName).subscribe((data) => {

            this.Preloader = false;
            this.umrnupload = data.Table;
            if (data.Table.length != 0) {
                this.showModalsave = true;
            }
            this.BindGrid();
            var tbldiv1 = <HTMLFormElement>document.getElementById('tbldiv1');
            tbldiv1.style.display = 'block';

            var tbldiv2 = <HTMLFormElement>document.getElementById('tbldiv2');
            tbldiv2.style.display = 'none';

            var tbldiv3 = <HTMLFormElement>document.getElementById('tbldiv3');
            tbldiv3.style.display = 'none';

            var tbldiv4 = <HTMLFormElement>document.getElementById('tbldiv4');
            tbldiv4.style.display = 'none';
            //this.tbldiv1 = true;
            //this.tbldiv2 = false;
            //this.tbldiv3 = false;
            //this.tbldiv4 = false;
            window.location.reload();
        });


    }



    
}
