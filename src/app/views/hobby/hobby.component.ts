import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { GuardHobbyService } from 'src/app/core/guard/guard-hobby.service';

@Component({
  selector: 'app-hobby',
  templateUrl: './hobby.component.html',
  styleUrls: ['./hobby.component.css']
})
export class HobbyComponent implements OnInit {

  islogHooby: boolean = false;

  constructor(
    private guardHobbyService: GuardHobbyService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.islogHooby = this.guardHobbyService.checkAuthHobby();
  }

  signinSubHobby(val: string) {


    if (val === 'admin@gmail.com') {
      this.guardHobbyService .signinHobby() ;
    } else {
      this.guardHobbyService .signoutHobby() ;

    }
  }

  iSignArt() {
    this.router.navigate(['art'])
 }
  iSignSport() {
    this.router.navigate(['art'])
 }
}
