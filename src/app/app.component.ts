import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent
implements OnInit{
  current: IcurrentWeather
 constructor() {
    this.current = {
      city: 'Bethesda',
      country: 'US',
      date: new Date(),
      image:'',
      temperture:'72'
      description:'Sunny'
    }

    



