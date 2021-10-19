import { Injectable } from "@angular/core";
import { CanActivate, CanActivateChild, Router, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from "@angular/router";
import { Observable } from "rxjs";
import { GuardHobbyService } from "../guard/guard-hobby.service";



@Injectable({
  providedIn: 'root'
})


export class AuthHobbyGuard implements CanActivate, CanActivateChild {


  constructor(
    private guardHobbyService: GuardHobbyService,
    private router: Router
  ) { }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {

    return this.guardHobbyService.isAuthenticated().then((Atenticated) => {
      if (Atenticated) {
        alert(`you can go to sub-hobby page`);

        return true;

      } else {
        alert(`you can't go to sub-hobby page`);
        this.router.navigate(['/not-auth']);
        return false;
      }

    });
  }


  canActivateChild(
    childRoute: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {
    return this.canActivate(childRoute,state)
  }

}


