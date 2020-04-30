/// <reference path="../../../models/link-setup/bindgrid.ts" />
/// <reference path="../../services/link-setup/link-setup.service.ts" />
/// <reference path="../../../models/link-setup/iconname.ts" />
import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { UrlSegment } from '@angular/router';
import { LinkSetupService } from '../../services/link-setup/link-setup.service';
import { Linksetup } from '../../../models/link-setup/bindgrid';
import { IconName } from '../../../models/link-setup/iconname';
import { count } from 'rxjs/operators';

@Component({
  selector: 'app-link-setup',
  templateUrl: './link-setup.component.html',
  styleUrls: ['./link-setup.component.css']
})
export class LinkSetupComponent implements OnInit {
    Linksetup: FormGroup;
   
    showModalsave: boolean;
    setSelectedRow: Function;
    Preloader: boolean = false;
    length: any;
    linksetup: Linksetup;
    public formid: boolean = false;
    public tbldiv: boolean = false;
    iconname: IconName;
    Temp: number = 1; submitted = false;
    LinkId: number = 0;
    message: string;

    constructor(private formBuilder: FormBuilder, private _LinkSetupService: LinkSetupService) { }
    hide() {
       
        this.showModalsave = false;
    }
    ngOnInit() {
        this.Linksetup = this.formBuilder.group({
            LinkName: ['', Validators.required],          
            Url: ['', Validators.required],
            OrderNo: ['', Validators.required],
            IconName: [''],
            Purpose: [''],
            IsActive: ['']
            
        });

       // this.Preloader = false;
        this.BindGrid();
      
        this.GetIconDropDown();


        document.getElementById("btnEdit").setAttribute("disabled", "disabled");
        document.getElementById("btnBack").setAttribute("disabled", "disabled");
        document.getElementById("btnSave").setAttribute("disabled", "disabled");

        this.setSelectedRow = function (index) {
            this.selectedRow = index;
        }
  }
    isFieldValid(field: string) {
        return !this.Linksetup.get(field).valid && this.Linksetup.get(field).touched;
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
    CheckLink() {
        let LinkName = ((document.getElementById("LinkName") as HTMLInputElement).value);
        if (LinkName=="0") {
            this.Linksetup.controls['LinkName'].setValue("");
            document.getElementById("LinkName").classList.add('validate');
            document.getElementById("LinkName").setAttribute("placeholder", "Can't Be Zero");
        }
        else {
            document.getElementById("LinkName").classList.remove('validate');
        }
    }
    CheckURL() {
        let URL = ((document.getElementById("URL") as HTMLInputElement).value);
        if (URL=="0") {
            this.Linksetup.controls['Url'].setValue("");
            document.getElementById("URL").classList.add('validate');
            document.getElementById("URL").setAttribute("placeholder", "Can't Be Zero");
        }
        else {
            document.getElementById("URL").classList.remove('validate');
        }
    }
    CheckOrderNo() {
        let OrderNo = ((document.getElementById("OrderNo") as HTMLInputElement).value);
        if (OrderNo == "0") {
            this.Linksetup.controls['OrderNo'].setValue("");
            document.getElementById("OrderNo").classList.add('validate');
            document.getElementById("OrderNo").setAttribute("placeholder", "Can't Be Zero");
        }
        else {
            document.getElementById("OrderNo").classList.remove('validate');
        }
    }

    removeClass() {
        document.getElementById("LinkName").classList.remove('validate');
        document.getElementById("URL").classList.remove('validate');
        document.getElementById("OrderNo").classList.remove('validate');
    }
    BindGrid() {
       
        this.Preloader = true;
        this._LinkSetupService.BindGrid().
            subscribe((data) => {
                this.Preloader = false;            
                this.linksetup = data.Table;
                this.tbldiv = true;
                
            });


    }
    GetIconDropDown() {
        this._LinkSetupService.GetIconDropDown().
            subscribe((data) => {
              
                this.iconname = data.Table;
                console.log(this.iconname);
            });
    }

    btnNew_Click() {
        this.Linksetup.reset();
        document.getElementById("btnSave").removeAttribute("disabled");
        document.getElementById("btnEdit").setAttribute("disabled", "disabled");
        document.getElementById("btnNew").setAttribute("disabled", "disabled");
        document.getElementById("btnBack").removeAttribute("disabled");
        this.tbldiv = false;
        this.formid = true;
        this.Temp = 1;
        this.LinkId = 0;
    }

    btnBack_Click() {
       
      
        this.formid = false;
        this.BindGrid();
       // this.tbldiv = true;
        //document.getElementById('divSearch').hidden = false;
        //document.getElementById('btnExport').hidden = false;
        document.getElementById("btnSave").setAttribute("disabled", "disabled");
        document.getElementById("btnEdit").setAttribute("disabled", "disabled");
        document.getElementById("btnNew").removeAttribute("disabled");
        document.getElementById("btnBack").setAttribute("disabled", "disabled");
        this.Linksetup.reset();
    }
    editData() {

        this._LinkSetupService.EditData(this.LinkId).subscribe((data) => {
            this.linksetup = data.Table;
            console.log(this.linksetup);
            this.Linksetup.controls['LinkName'].setValue(this.linksetup[0].LinkName);
            this.Linksetup.controls['Url'].setValue(this.linksetup[0].url);
            this.Linksetup.controls['Purpose'].setValue(this.linksetup[0].Purpose);
            this.Linksetup.controls['OrderNo'].setValue(this.linksetup[0].OrderNo);
            this.Linksetup.controls['IconName'].setValue(this.linksetup[0].IconName);
           
            if (this.linksetup[0].IsActive == 1) {
                this.Linksetup.controls['IsActive'].setValue(true);
            }
           
        });
        document.getElementById("btnSave").removeAttribute("disabled");
        document.getElementById("btnEdit").setAttribute("disabled", "disabled");
        document.getElementById("btnNew").setAttribute("disabled", "disabled");
        document.getElementById("btnBack").removeAttribute("disabled");
        //document.getElementById('divSearch').hidden = true;
        //document.getElementById('btnExport').hidden = true;
        this.tbldiv = false;
        this.formid = true;
    }
    onSubmit() {


        this.submitted = true;
        if (this.Linksetup.valid) {
            //this.sucess=true;
            const datat = this.Linksetup.value;
            if (this.Temp == 1) {
                this.InsertData();

            }
            else {
                this.UpDateLink();
            }

        } else {

            this.validateAllFormFields(this.Linksetup);
        }
    }

    InsertData() {
        let item = JSON.parse(sessionStorage.getItem('User'));
        this._LinkSetupService.InsertData(JSON.stringify(this.Linksetup.value), item.UserId).subscribe(
            (data) => {
                // this.linksetup = data;
                this.linksetup = data;
                if (this.linksetup[0].Result == -1) {

                    this.message = 'Link already exists';
                    alert(this.message);
                }
                else {
                   
                        //innerHTML("Link Save SuccessFully");
                    this.showModalsave = true;
                }
                this.Linksetup.reset();
                this.BindGrid();

                this.formid = false;
                this.tbldiv = true;
                document.getElementById("btnEdit").setAttribute("disabled", "disabled");
                document.getElementById("btnBack").setAttribute("disabled", "disabled");
                document.getElementById("btnSave").setAttribute("disabled", "disabled");
                document.getElementById("btnNew").removeAttribute("disabled");
                //document.getElementById('divSearch').hidden = false;
                //document.getElementById('btnExport').hidden = false;


            }
        )
    }

    UpDateLink() {
        let item = JSON.parse(sessionStorage.getItem('User'));


        this._LinkSetupService.UpDateLink(JSON.stringify(this.Linksetup.value), item.UserId, this.LinkId).subscribe(
            (data) => {
                this.linksetup = data;
                if (this.linksetup[0].Result == -1) {

                    this.message = 'Error';
                    alert(this.message);

                }
                else {
                    this.showModalsave = true;
                }

                this.Linksetup.reset();
                this.BindGrid();

                this.formid = false;
                this.tbldiv = true;
                document.getElementById("btnEdit").setAttribute("disabled", "disabled");
                document.getElementById("btnBack").setAttribute("disabled", "disabled");
                document.getElementById("btnSave").setAttribute("disabled", "disabled");
                document.getElementById("btnNew").removeAttribute("disabled");
                //document.getElementById('divSearch').hidden = false;
                //document.getElementById('btnExport').hidden = false;


            }
        )
    }

    doubleClick(Data: any) {
        const Currentrowid = this.Linksetup.value;
        this.LinkId = Data.LinkID;

        this.editData();        
        this.Temp = 2;

    }

    setClickedRow(Data: any) {
        const Currentrowid = this.Linksetup.value;
        this.LinkId = Data.LinkID;
        this.Temp = 2;

        document.getElementById("btnEdit").removeAttribute("disabled");
    }

   
}
