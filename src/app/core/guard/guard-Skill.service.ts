import { Injectable } from "@angular/core";


@Injectable({
  providedIn: 'root',
})

export class GuardSkillService {

  private isLoggedSkill: boolean = false;



  public checkAuthSkill() {
    return this.isLoggedSkill;
  }
  public isAuthenticated() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(this.isLoggedSkill);
      }, 1000);
    })
  }

  public signinSkill() {
    this.isLoggedSkill = true;
  }

  public sinoutSkill() {
    this.isLoggedSkill = false;
  }

}
