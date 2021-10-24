import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { AddressGuard } from "./core/auth/address.guard";
import { AuthHobbyGuard } from "./core/auth/auth-hobby.guard";
import { AuthSkillService } from "./core/auth/auth-Skill.service";
import { AboutComponent } from "./views/about/about.component";
import { AddressComponent } from "./views/address/address.component";
import { ArtComponent } from "./views/art/art.component";
import { ContactComponent } from "./views/contact/contact.component";
import { GuardingComponent } from "./views/guarding/guarding.component";
import { HobbyComponent } from "./views/hobby/hobby.component";
import { HomeComponent } from "./views/home/home.component";
import { LoginComponent } from "./views/login/login.component";
import { NotAuthorizedComponent } from "./views/not-authorized/not-authorized.component";
import { NotFoundComponent } from "./views/not-found/not-found.component";
import { RegisterComponent } from "./views/register/register.component";
import { SkillComponent } from "./views/skill/skill.component";
import { SportComponent } from "./views/sport/sport.component";




const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'guard', component: GuardingComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'about', component: AboutComponent },
  { path: 'address', component: AddressComponent, canDeactivate: [AddressGuard] },
  { path: 'skill', component: SkillComponent, canActivate: [AuthSkillService] },
  {
    path: 'hobby', component: HobbyComponent, canActivateChild: [AuthHobbyGuard], children: [
      { path: 'sport', component: SportComponent },
      { path: 'art', component: ArtComponent },
    ]
  },
  {
    path: 'product',
    loadChildren: async () => (await import('./views/product/product.module')).ProuductModule,
  },

  { path: 'not-Auth', component: NotAuthorizedComponent },
  { path: 'login', component: LoginComponent },
  { path: '**', component: NotFoundComponent },



]

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes),
    CommonModule
  ],
  exports: [RouterModule]
})

export class AppRoutingModule { }
