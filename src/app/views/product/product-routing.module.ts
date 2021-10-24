import { Component, NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { OilDetailComponent } from "./oil-detail/oil-detail.component";
import { OilComponent } from "./oil/oil.component";
import { ProductComponent } from "./product.component";
import { RiceDetailComponent } from "./rice-detail/rice-detail.component";
import { RiceComponent } from "./rice/rice.component";

const routes: Routes = [
  { path: '', component: ProductComponent },
  { path: 'oil', component: OilComponent },
  { path: 'oil/:id', component: OilDetailComponent },
  { path: 'rice', component: RiceComponent },
  { path: 'rice/:id', component: RiceDetailComponent },

]


@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [
    RouterModule
  ]
})

export class ProductRoutingModule { }
