import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  
    showModal: boolean;
    onClick(event) {
        this.showModal = true; 
       

    }
    //Bootstrap Modal Close event
    hide() {
        this.showModal = false;
    }
  ngOnInit() {
  }

}
