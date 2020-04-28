import { Component, OnInit } from '@angular/core';
import { UMRNHISTORYSERVICEService } from '../../services/umrn_history/umrn-history-service.service';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { UMRNHISTORYCLASS } from '../../../models/umrn_history/umrn-history-class';

@Component({
    selector: 'app-umrnhistory',
    templateUrl: './umrnhistory.component.html',
    styleUrls: ['./umrnhistory.component.css']
})

export class UmrnhistoryComponent implements OnInit {

    AllData: UMRNHISTORYCLASS;
    SearchData: FormGroup;
    length: any;
    Preloader: boolean = true;
    constructor(private UMRService: UMRNHISTORYSERVICEService, private formBuilder: FormBuilder) { }

    ngOnInit() {
        this.SearchData = this.formBuilder.group({
            //UMRN: ['', Validators.required],
            //CustomerName: ['', Validators.required],
            //ReferenceNumber: ['', Validators.required]
            searchtext: ['', Validators.required]
        });

        this.Preloader = false;
    }
    isFieldValid(field: string) {
        return !this.SearchData.get(field).valid && this.SearchData.get(field).touched;
    }

    SearchFunction(UMRN, CustomerName, RefrNo) {
        
        let item = JSON.parse(sessionStorage.getItem('User'));
        // alert(UMRN + " " + CustomerName + " " + RefrNo + " " + item.UserId);
       
            var jasondata = {
                "UMRN": UMRN,
                "customer1": CustomerName,
                "RefrNo": RefrNo,
                "UserId": item.UserId
        }
        if (this.SearchData.valid) {
            this.Preloader = true;
            this.UMRService.BindGridData(jasondata).subscribe(
                (data) => {
                    this.Preloader = false;
                    this.AllData = data;
                });
        }

        else {

            this.validateAllFormFields(this.SearchData);
        }
        
    }

   
    displayFieldCss(field: string) {
        return {
            'validate': this.isFieldValid(field),
        };
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
}