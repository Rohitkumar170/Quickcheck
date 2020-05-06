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
        var UMRN = ((document.getElementById("txtumrn") as HTMLInputElement).value);
        var name = ((document.getElementById("txtcustname") as HTMLInputElement).value);
        var refno = ((document.getElementById("txtrefno") as HTMLInputElement).value);
       // this.BindGrid();
    }
    isFieldValid(field: string) {
        return !this.SearchData.get(field).valid && this.SearchData.get(field).touched;
    }

    SearchFunction() {
      
        if (this.SearchData.valid) {
            var tbldiv = <HTMLFormElement>document.getElementById('tbldiv');
           // tbldiv.style.display = 'none';
            this.Preloader = true;
            this.BindGrid();            
        }

        else {
            this.validateAllFormFields(this.SearchData);
        }
        
    }
    BindGrid(){
       
        var UMRN = ((document.getElementById("txtumrn") as HTMLInputElement).value);
        var CustomerName = ((document.getElementById("txtcustname") as HTMLInputElement).value);
        var RefrNo = ((document.getElementById("txtrefno") as HTMLInputElement).value);
        let item = JSON.parse(sessionStorage.getItem('User'));
       
       
            var jasondata = {
                "UMRN": UMRN,
                "customer1": CustomerName,
                "RefrNo": RefrNo,
                "UserId": item.UserId
        }
      
        this.UMRService.BindGridData(jasondata).subscribe(
            (data) => {
                this.Preloader = false;
                var tbldiv = <HTMLFormElement>document.getElementById('tbldiv');
                tbldiv.style.display = 'block';
                this.AllData = data;
                console.log(data)
            });
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