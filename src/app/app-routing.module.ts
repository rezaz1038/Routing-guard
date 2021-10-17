import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { AboutComponent } from "./views/about/about.component";
import { ContactComponent } from "./views/contact/contact.component";
import { HobbyComponent } from "./views/hobby/hobby.component";
import { HomeComponent } from "./views/home/home.component";
import { LoginComponent } from "./views/login/login.component";
import { NotAuthorizedComponent } from "./views/not-authorized/not-authorized.component";
import { NotFoundComponent } from "./views/not-found/not-found.component";
import { RegisterComponent } from "./views/register/register.component";
import { SkillComponent } from "./views/skill/skill.component";


const routes:Routes=[
  {path:'',component:HomeComponent},
  {path:'contact',component: ContactComponent},
  {path:'register',component: RegisterComponent},
  {path:'about',component: AboutComponent },
  {path:'skill',component: SkillComponent },
  {path:'hobby',component: HobbyComponent  },
  {path:'not-Auth',component: NotAuthorizedComponent  },
  {path:'login',component: LoginComponent  },
  {path:'**',component: NotFoundComponent  },



]

@NgModule({
  declarations:[],
  imports:[RouterModule.forRoot(routes),
    CommonModule
  ],
  exports:[RouterModule ]
})

export  class AppRoutingModule {}
