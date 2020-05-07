import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MultiSelectService {

  public cities = [
    {name: 'New Delhi', value: 1},
    {name: 'Mumbai', value: 3},
    {name: 'Kolkata', value: 5},
    {name: 'Chennai', value: 6},
    {name: 'Pune', value: 8},
    {name: 'Hydrabad', value: 11},
    {name: 'Patna', value: 12},
  ]

  constructor(private httpClient: HttpClient) { }

  getCities(){
    return of(this.cities);
  }

}