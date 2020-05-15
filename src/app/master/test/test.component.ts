import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {

  href1: string; submitted = true; Isverified = false; 
    TestForm: FormGroup; public errormsg: any; message: string; btnloginDisabled: boolean = false; btnAgreeDisabled: boolean = false;
    LoginCheck = null; 
    constructor(private router: Router, private formBuilder: FormBuilder) {    }

    ngOnInit() {
      sessionStorage.clear();
      this.TestForm = this.formBuilder.group({
          UserName: [''],
          Password: ['', Validators.required]
          
      });
    }
    displayFieldCss(field: string) {

      return {
          'validate': this.isFieldValid(field),
      };
  }
  isFieldValid(field: string) {

    return !this.TestForm.get(field).valid && this.TestForm.get(field).touched;
}
}
