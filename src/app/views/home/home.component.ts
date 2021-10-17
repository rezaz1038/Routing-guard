import { getCurrencySymbol, NgClass } from '@angular/common';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit  {
title='app-home';
  pDisplay:string='';
  count=0;
  hiddenP:boolean=true;

  inutStatus=false;
  fname='reza';

  constructor() { }

  ngOnInit(): void {
  }

  getData(val:string){
    this.pDisplay=val;
  }
counterUp(){

 this.count++ ;

}
counterDown(){

 this.count-- ;

}
hide(){
  if (this.hiddenP){
    this.hiddenP=false
  }else{
    this.hiddenP=true

  }
}

changeClass(){

}

}
