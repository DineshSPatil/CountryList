import { Component } from '@angular/core';
import {HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent {
  title = 'CountryCodeApp';
  dataUrl = 'assets/data.json';
  countries: any = [];

  constructor(private httpClient: HttpClient){}
  ngOnInit(){
    this.httpClient.get(this.dataUrl).subscribe(data =>{
      console.log(data);
      this.countries = data;
    })
  }
}
