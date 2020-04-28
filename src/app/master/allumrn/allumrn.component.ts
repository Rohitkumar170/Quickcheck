import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { GridData } from '../../../Models/Allumrn/GridData';
import { AllumrnService } from '../../Services/Allumrn/allumrn.service';
import { Umrn_Class } from '../../../Models/Allumrn/Umrn_Class';
@Component({
  selector: 'app-allumrn',
  templateUrl: './allumrn.component.html',
  styleUrls: ['./allumrn.component.css']
})
export class AllumrnComponent implements OnInit {
    Allumrn: FormGroup;
    submitted = false;
    Umrndta:GridData;
    constructor(private formBuilder: FormBuilder, private _allumrn: AllumrnService) { }

    ngOnInit() {

       // let item = JSON.parse(sessionStorage.getItem('User'));
        let Entityid = 13;
        let Pageno = 1;
        this._allumrn.GridBind(Entityid, Pageno).subscribe(
            (data) => {
                this.Umrndta = data;
               // console.log(this.Umrndta);


            });

        this.Allumrn = this.formBuilder.group({
            UMRN: ['', Validators.required],
            CustomerName: ['', Validators.required],
            ReferenceNumber: ['', Validators.required]

        });
    }


    //SearchFunction(UMRN, CustomerName, ReferenceNumber) {

    //    let Entityid = 13;
    //    let Pageno = 1;

    //    var jasondata = {
    //        "UMRN": UMRN,
    //        "CustomerName": CustomerName,
    //        "ReferenceNumber": ReferenceNumber,
    //        "Entityid": Entityid,
    //        "Pageno": Pageno
    //    }


    //    this._allumrn.SearchData(jasondata).subscribe(
    //        (data) => {
    //            this.Umrndta = data;
    //        });
    //}

    
   
    isFieldValid(field: string) {

        return !this.Allumrn.get(field).valid && this.Allumrn.get(field).touched;
    }
    
    displayFieldCss(field: string) {
        return {
            'validate': this.isFieldValid(field),
        };
    }
    //SearchFunction() {
    //    this.submitted = true;
    //    if (this.Allumrn.valid) {
    //        alert("valid");

    //    } else {
    //        alert("Not valid");
    //        this.validateAllFormFields(this.Allumrn);
    //    }
    //}

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

}
