import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { GridData } from '../../../Models/Allumrn/GridData';
import { AllumrnService } from '../../Services/Allumrn/allumrn.service';
import { Umrn_Class } from '../../../Models/Allumrn/Umrn_Class';
import { GridDataDetails } from '../../../Models/Allumrn/GridDataDetails';
//import { Umrn_Class } from '../../../Models/Allumrn/Umrn_Class';

@Component({
  selector: 'app-allumrn',
  templateUrl: './allumrn.component.html',
  styleUrls: ['./allumrn.component.css']
})
export class AllumrnComponent implements OnInit {
    Allumrn: FormGroup;
    insert: Umrn_Class;
   // Addumrn: FormGroup;
    submitted = false;
    Umrndta: GridData;
    griddatadetail: GridDataDetails;
    Preloader: boolean = true;
   // dataArray: Array<GridData> = [];
    showmodalcreateumrn: boolean;
    showModalumrnstatement: boolean;
     Entityid;
     Pageno;

    constructor(private formBuilder: FormBuilder, private _allumrn: AllumrnService) { }

    ngOnInit() {
        this.showmodalcreateumrn = false;
        this.showModalumrnstatement = false;
        this.Preloader = false;
       // let item = JSON.parse(sessionStorage.getItem('User'));
        
        this.GridBind();
        
      

        this.Allumrn = this.formBuilder.group({
           
            Searchvalidation: ['', Validators.required]
        });


        //this.Addumrn = this.formBuilder.group({

        //    Newumrn: ['', Validators.required],
        //    CustomerName: ['', Validators.required],
        //    ReferenceNumber: ['', Validators.required],
        //    Amount: ['', Validators.required],
        //    FromDate: ['', Validators.required],
        //    ToDate: ['', Validators.required]
        //});
    }

    GridBind() {
        this.Entityid = 13;
        this.Pageno = 1;
        this.Preloader = true;
        this._allumrn.GridBind(this.Entityid, this.Pageno).subscribe(
            (data) => {
                this.Preloader = false;
                this.Umrndta = data;
                console.log(this.Umrndta);


            });

    }
     
    onClick(event) {
        this.showmodalcreateumrn = true;


    }

    hide() {
        this.showmodalcreateumrn = false;
        this.showModalumrnstatement = false;
    }


    
    //onClick(event) {
    //    this.showModalumrnstatement = true;


    //}

    //hide() {
    //    this.showModalumrnstatement = false;
    //}
    
    Insertumrn(NEWUMRN, Customername, ReferenceNumber, Amount, FromDate, ToDate) {


        let Entityid = 13;
        let Userid = 86;
        let CreatedBy = 1;
        var jasondata = {
            "UMRN": NEWUMRN,
            "CustomerName": Customername,
            "ReferenceNumber": ReferenceNumber,
            "Entityid": Entityid,
            "Amount": Amount,
            "FromDate": FromDate,
            "ToDate": ToDate,
            "Userid": Userid,
            "CreatedBy": CreatedBy
        }

        
        //this._allumrn.AddUmrn(jasondata).subscribe(
          //  (data) => {
            //    this.insert = data;
              //  alert("Data Save successfully");
                //this.showmodalcreateumrn = false;
                
           // });


       



    }


    onRowClicked(data: any) {
        alert("dlclick");
        //const Currentrowid = this.Allumrn.value;
        this.showModalumrnstatement = true;
       
       // this.dataArray.push(data);
        var UMRN = data.UMRN;
        var Entityid = 13;
      //  this._allumrn.GridDataDetails(UMRN, Entityid).subscribe(
       //    (data) => {
         //       this.Preloader = false;
           //     this.griddatadetail = data;
             //  console.log(this.griddatadetail);


        //  });
       // this.dataArray = data;
        //this.showModalumrnstatement = true;
       

        //this.Login.controls['FullName'].setValue(data.FullName);
        //this.Login.controls['Email'].setValue(data.Email);
        //this.Login.controls['Password'].setValue(data.Password);
        //this.buttonDisabled1 = false;
        //this.Temp = 2;
       
    }
   
    isFieldValid(field: string) {
        return !this.Allumrn.get(field).valid && this.Allumrn.get(field).touched;
    }
    
    displayFieldCss(field: string) {
        return {
            'validate': this.isFieldValid(field),
        };
    }
    //isFieldValid1(field: string) {
    //    return !this.Addumrn.get(field).valid && this.Addumrn.get(field).touched;
    //}

    //displayFieldCss1(field: string) {
    //    return {
    //        'validate': this.isFieldValid1(field),
    //    };
    //}

    //Addumrn1() {

    //    if (this.Addumrn.valid) {
    //        alert("valid");
    //        //let Entityid = 13;
    //        //let Pageno = 1;
    //        //var umrn1 = UMRN.replace('\t', '');
    //        //var CustomerName1 = CustomerName.replace('\t', '');
    //        //var ReferenceNumber1 = ReferenceNumber.replace('\t', '');

    //        //var jasondata = {
    //        //    "UMRN": umrn1,
    //        //    "CustomerName": CustomerName1,
    //        //    "ReferenceNumber": ReferenceNumber1,
    //        //    "Entityid": Entityid,
    //        //    "Pageno": Pageno
    //        //}

    //        //this.Preloader = true;
    //        //this._allumrn.SearchData(jasondata).subscribe(
    //        //    (data) => {
    //        //        this.Preloader = false;
    //        //        this.Umrndta = data;
    //        //    });

    //    } else {

    //        alert("Not valid");
    //        this.validateAllFormFields(this.Addumrn);
    //    }


    //}

//    SearchFunction(UMRN, CustomerName, ReferenceNumber) {
        //this.submitted = true;
  //      if (this.Allumrn.valid) {
    //        alert("valid");
      //      let Entityid = 13;
        //    let Pageno = 1;
          //  var umrn1 = UMRN.replace('\t', '');
            //var CustomerName1 = CustomerName.replace('\t', '');
          //  var ReferenceNumber1 = ReferenceNumber.replace('\t', '');

           // var jasondata = {
             //   "UMRN": umrn1,
              //  "CustomerName": CustomerName1,
              //  "ReferenceNumber": ReferenceNumber1,
              //  "Entityid": Entityid,
               // "Pageno": Pageno
           // }

          //  this.Preloader = true;
           // this._allumrn.SearchData(jasondata).subscribe(
            //    (data) => {
              //      this.Preloader = false;
                //    this.Umrndta = data;
               // });

       // } else {

         //   alert("Not valid");
          // this.validateAllFormFields(this.Allumrn);
       // }
  // }
  //  validateAllFormFields(formGroup: FormGroup) {
    //    Object.keys(formGroup.controls).forEach(field => {
      //      const control = formGroup.get(field);
        //    if (control instanceof FormControl) {
          //      control.markAsTouched({ onlySelf: true });
          //  } else if (control instanceof FormGroup) {
          //      this.validateAllFormFields(control);
          //  }
      //  });
   // }
          
}
