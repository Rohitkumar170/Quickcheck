import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { GridData } from '../../../Models/Allumrn/GridData';
import { AllumrnService } from '../../Services/Allumrn/allumrn.service';
import { Umrn_Class } from '../../../Models/Allumrn/Umrn_Class';
import { GridDataDetails } from '../../../Models/Allumrn/GridDataDetails';
import { Singlerow } from '../../../Models/Allumrn/Singlerow';
import { CountGrid } from '../../../Models/Allumrn/Countgrid';

@Component({
  selector: 'app-allumrn',
  templateUrl: './allumrn.component.html',
  styleUrls: ['./allumrn.component.css']
})
export class AllumrnComponent implements OnInit {
    Allumrn: FormGroup;
    insert: Umrn_Class;
    Addumrn: FormGroup;
    submitted = false;
    Umrndta: GridData;
    Count: CountGrid;
    Singlerow: Singlerow;
    griddatadetail: GridDataDetails;
    Preloader: boolean = true;
    dataArray: Array<GridDataDetails> = [];
    showmodalcreateumrn: boolean;
    showModalumrnstatement: boolean;
    showModalumrnstatement1: boolean;
    showModalumrnstatement2 :boolean;
    showdisplay: boolean;
    showdisplay1: boolean;
    SelectionStatusOfMutants = [];
    UserId: string = "";
    EntityId: string = "";
    
    Pageno;
    HeaderArray;
    HeaderArray1;
    Selectionrow: Array<GridData> = [];
    checkFlag: number = 0;
    datacount: any;
    umrndata1: GridData;
    Pageno1: number = 1;
    savedata: any;
    constructor(private formBuilder: FormBuilder, private _allumrn: AllumrnService) { }

    ngOnInit() {
        this.showmodalcreateumrn = false;
        this.showModalumrnstatement = false;
        this.showModalumrnstatement1 = false;
        this.showModalumrnstatement2 = false;
        this.showdisplay = false;
        this.showdisplay1 = false;
        this.Preloader = false;
       
        this.GridBind();
        
        this.Allumrn = this.formBuilder.group({
           
            Searchvalidation: ['', Validators.required]
        });


        this.Addumrn = this.formBuilder.group({

            Newumrn: ['', Validators.required],
            CustomerName: ['', Validators.required],
            ReferenceNumber: ['', Validators.required],
            Amount: ['', Validators.required],
            FromDate: ['', Validators.required],
            ToDate: ['', Validators.required]
        });
    }

   


    GridBind() {
       
        let item = JSON.parse(sessionStorage.getItem('User'));
        this.UserId = item.UserId;
        this.EntityId = item.ReferenceId;
        this.Preloader = true;


        this._allumrn.GridBind1(this.EntityId, this.Pageno1).subscribe(
            (data) => {
               // console.log(data);
                this.Preloader = false;
                this.umrndata1 = data.Table;
                this.Count = data.Table1[0];
               // alert(this.Count.TR)



                let k = data.Table.length;
          
               
                if (k < 100) {

                    this.showdisplay = false;

                }
                else {

                    this.showdisplay = true;

                }

             
                

            });

    }

    pageprev() {
        this.Pageno1 = this.Pageno1 - 1;
        if (this.Pageno1 == 1) {
            this.showdisplay1 = false;
        }
        this.GridBind();


    }


    pagenext() {
        if (this.Pageno1 >= 1) {
            this.Pageno1 = this.Pageno1 + 1;
        }
        else {
            this.Pageno1 = 1;
        }

        if (this.Pageno1 > 1) {
            this.showdisplay1 = true;
        }
       
        this.GridBind();

    }
     
    onClick(event) {
        this.showmodalcreateumrn = true;


    }

    hide() {
        this.showmodalcreateumrn = false;
        this.showModalumrnstatement = false;
        this.showModalumrnstatement1 = false;
        this.showModalumrnstatement2 = false;
    }

    
    
    Insertumrn(NEWUMRN, Customername, ReferenceNumber, Amount, FromDate, ToDate) {

        if (this.Addumrn.valid) {
            let item = JSON.parse(sessionStorage.getItem('User'));
            this.UserId = item.UserId;
            this.EntityId = item.ReferenceId;
       // let CreatedBy = 1;
        var jasondata = {
            "UMRN": NEWUMRN,
            "CustomerName": Customername,
            "ReferenceNumber": ReferenceNumber,
            "Entityid": this.EntityId,
            "Amount": Amount,
            "FromDate": FromDate,
            "ToDate": ToDate,
            "Userid": this.UserId,
            "CreatedBy": Customername
        }

        
        this._allumrn.AddUmrn1(jasondata).subscribe(
            (data) => {

                console.log(data);
                console.log(data.Table[0].updated);
                
               

                if (data.Table[0].updated == 2) {
                    alert("UMRN Already Exist");
                }
                else {

                    alert("Data Save successfully");

                }
               
                this.showmodalcreateumrn = false;
                this.GridBind();
                this.Allumrn.reset();
                
            });

        } else
        {

            this.validateAllFormFields(this.Addumrn);
        }
       



    }


    onRowClicked(data: any) {
        
        var UMRN = data.UMRN;
        let item = JSON.parse(sessionStorage.getItem('User'));
        this.UserId = item.UserId;
        this.EntityId = item.ReferenceId;
        this._allumrn.GridDataDetails(UMRN, this.EntityId).subscribe(
           (data) => {
               this.Preloader = false;
               this.griddatadetail = data;
               this.dataArray.push(data);
              
               var i = Object.entries(this.griddatadetail)[0][1];
               console.log(i.type);
             
               if (i.type == 0)
               {
                   //alert("0");
                   this.showModalumrnstatement1 = true;

               } else
                   if (i.type == 2)
                   {
                      // alert("2");
                       this.showModalumrnstatement2 = true;
                   }
                   else
                   {
                       //alert("1");
                           this.showModalumrnstatement = true;
                    }

           


          });
    
    }
   
    isFieldValid(field: string) {
        return !this.Allumrn.get(field).valid && this.Allumrn.get(field).touched;
    }
    
    displayFieldCss(field: string) {
        return {
            'validate': this.isFieldValid(field),
        };
    }
    isFieldValid1(field: string) {
        return !this.Addumrn.get(field).valid && this.Addumrn.get(field).touched;
    }

    displayFieldCss1(field: string) {
        return {
            'validate': this.isFieldValid1(field),
        };
    }


    backClick() {
        this.Addumrn.reset();      
        this.Allumrn.reset();
        this.GridBind();

    }

    
    downloadfile(lang) {
       // alert("Clicked");
        this.SelectionStatusOfMutants.push(lang);
        //this.Singlerow = lang;
        //console.log(this.Singlerow);
        this.checkFlag = 1;
       
        
    }

    SearchFunction(UMRN, CustomerName, Refere) {
       
        if (this.Allumrn.valid) {
          //  alert("valid");
            let item = JSON.parse(sessionStorage.getItem('User'));
            this.UserId = item.UserId;
            this.EntityId = item.ReferenceId;
           // let Pageno = 1;
            var umrn1 = UMRN.replace('\t', '');
            var CustomerName1 = CustomerName.replace('\t', '');
            var ReferenceNumber1 = Refere.replace('\t', '');;
            
            var jasondata = {
                "UMRN": umrn1,
                "CustomerName": CustomerName1,
                "ReferenceNumber": ReferenceNumber1,
                "Entityid": this.EntityId,
                "Pageno": this.Pageno1
            }

            this.Preloader = true;
            this._allumrn.SearchData1(jasondata).subscribe(
                (data) => {
                    this.Preloader = false;
                    this.umrndata1 = data.Table;
                    this.Count = data.Table1[0];
                    if (this.Pageno1 == 1) {
                        if (this.Count.IsNxtRequired == 1) {
                            this.showdisplay = true;

                        }
                        else {
                            this.showdisplay = false;
                        }
                    }

                    let k = data.Table.length;


                    if (k < 100) {

                        this.showdisplay = false;

                    }
                    else {

                        this.showdisplay = true;

                    }
                });

        } else {

           // alert("Not valid");
           this.validateAllFormFields(this.Allumrn);
        }
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

    ConvertToCSV(objArray) {
       
        this.HeaderArray = {
            UMRN: "UMRN", Amount: "Amount", Status: "Status", ReferenceNo: "ReferenceNo",
            PresentmentDate: "PresentmentDate", type: "Type", FileNo: "FileNo", customer1: "Customer Name"

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



    ConvertToCSV1(objArray) {
     
        this.HeaderArray1 = {
            Srno: "Srno", UMRN: "UMRN", CustomerName: "CustomerName", Refrence: "Refrence",
            Amount: "Amount", FromDate: "FromDate", ToDate: "ToDate", CreatedOn: "CreatedOn", RecordType: "RecordType", MandateStatus: "MandateStatus", ErrorCode: "ErrorCode"

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
                for (var index in this.HeaderArray1) {
                    if (line != '') line += ','

                    line += this.HeaderArray1[index];
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

    ConvertToCSV3(objArray) {

        this.HeaderArray = {
            UMRN: "UMRN", Amount: "Amount", Status: "Status", Reference: "Reference",
            type: "Type", CustomerName: "Customer Name", FromDate: "FromDate", ToDate: "ToDate",

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


    ConvertToCSV4(objArray) {

        this.HeaderArray = {
            UMRN: "UMRN", Amount: "Amount", Refrence1: "Reference",
             FromDate: "FromDate", ToDate: "ToDate",

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
    download4() {
        var csvData = this.ConvertToCSV4(JSON.stringify(this.griddatadetail));

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

    download3() {
        var csvData = this.ConvertToCSV3(JSON.stringify(this.griddatadetail));

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


    download() {

        
        var csvData = this.ConvertToCSV(JSON.stringify(this.griddatadetail));

            
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

    download1() {

        if (this.checkFlag == 0) {
           var csvData = this.ConvertToCSV1(JSON.stringify(this.umrndata1));
        }
       else {
        var csvData = this.ConvertToCSV(JSON.stringify(this.SelectionStatusOfMutants));

       }
      //  var csvData = this.ConvertToCSV1(JSON.stringify(this.Umrndta));


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
}
