import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';



@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
    showModalchangepass: boolean;
    constructor(private router: Router) { }
    isShow = false;
    isShowModel = false;

    toggleDisplay() {
        this.isShow = !this.isShow;
    }
    ngOnInit() { }
    logout() {
        sessionStorage.clear();
        this.router.navigate(['/Login']);
    }
    onClick() {
        this.showModalchangepass = true;


    }
   

    hide() {
        this.showModalchangepass = false;
    }

    toggelwelcome() {
        alert('hi');
        this.isShowModel = !this.isShowModel;
    }

}

