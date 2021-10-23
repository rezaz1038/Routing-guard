import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-address',
  templateUrl: './address.component.html',
  styleUrls: ['./address.component.css']
})
export class AddressComponent implements OnInit {

  @ViewChild('inputRef') 'inputData': ElementRef;

  constructor() { }

  ngOnInit(): void {
  }

  canDeactivate(): boolean | Observable<boolean> | Promise<boolean> {
    if (this.inputData.nativeElement.value !== '') {
      return confirm('do you wanna  save the value in x service')

    } else {
      return false;
    }
  }
  getData() {
    console.log(this.inputData.nativeElement.value);
  }

}
