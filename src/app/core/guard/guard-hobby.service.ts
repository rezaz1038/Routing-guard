import { Injectable } from "@angular/core";
import { Observable } from "rxjs";



@Injectable({
  providedIn: 'root'
})

export class GuardHobbyService {

  private isloggedHobby: boolean = false;

  constructor() { }

  public isAuthenticated() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(this.isloggedHobby);
      }
        , 1000);

    })
  }

  public checkAuthHobby() {
    return this.isloggedHobby
  }

  signinHobby() {
    this.isloggedHobby = true;
  }

  signoutHobby() {
    this.isloggedHobby = false;
  }
}
