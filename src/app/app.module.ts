import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { AboutComponent } from './views/about/about.component';
import { AdminComponent } from './views/admin/admin.component';
import { AdressComponent } from './views/adress/adress.component';
import { ContactComponent } from './views/contact/contact.component';
import { FooterComponent } from './views/footer/footer.component';
import { HeaderComponent } from './views/header/header.component';
import { HobbyComponent } from './views/hobby/hobby.component';
import { HomeComponent } from './views/home/home.component';
import { LoginComponent } from './views/login/login.component';
import { NotAuthorizedComponent } from './views/not-authorized/not-authorized.component';
import { NotFoundComponent } from './views/not-found/not-found.component';
import { RegisterComponent } from './views/register/register.component';
import { SkillComponent } from './views/skill/skill.component';
import { GuardingComponent } from './views/guarding/guarding.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ContactComponent,
    AdminComponent,
    RegisterComponent,
    AboutComponent,
    SkillComponent,
    HobbyComponent,
    FooterComponent,
    AdressComponent,
    NotFoundComponent,
    NotAuthorizedComponent,
    LoginComponent,
    HeaderComponent,
    GuardingComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
