import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from "@angular/router";
import { Observable } from "rxjs";
import { GuardSkillService } from "../guard/guard-Skill.service";

@Injectable({
  providedIn:'root'
})


export class AuthSkillService implements CanActivate{

  constructor(
    private guardSkillService:GuardSkillService,
    private router:Router
  ){}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {
    return this.guardSkillService.isAuthenticated().then((Athenticated)=>{

      if(Athenticated){
        alert(`you can go to skill page`);

        return true;
      }else{
        this.router.navigate(['/not-Auth']);
        console.log(`you can't go to skill page`);

        alert(`you can't go to skill page`);
        return false;
      }

    })
  }


}
