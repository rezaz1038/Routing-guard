import { Component, OnInit } from '@angular/core';
import { Oil } from 'src/app/core/interface/i-oil';
import { ProductService } from 'src/app/core/services/product.service';

@Component({
  selector: 'app-oil',
  templateUrl: './oil.component.html',
  styleUrls: ['./oil.component.css']
})
export class OilComponent implements OnInit {

modelData:Oil[]=[]

  constructor(
    private productService:ProductService,
  ) {}



  ngOnInit(): void {
    this.modelData=this.productService.oils;
  }

}
