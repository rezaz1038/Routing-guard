import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { OilDetailComponent } from "./oil-detail/oil-detail.component";
import { OilComponent } from "./oil/oil.component";
import { ProductRoutingModule } from "./product-routing.module";
import { ProductComponent } from "./product.component";
import { RiceDetailComponent } from "./rice-detail/rice-detail.component";
import { RiceComponent } from "./rice/rice.component";

@NgModule({
imports:[
  CommonModule,
  ProductRoutingModule
],
declarations:[
  ProductComponent,
  OilComponent,
  OilDetailComponent,
  RiceComponent,
  RiceDetailComponent

]
})


export class ProuductModule {}
