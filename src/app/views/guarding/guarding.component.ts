import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { GuardSkillService } from 'src/app/core/guard/guard-Skill.service';

@Component({
  selector: 'app-guarding',
  templateUrl: './guarding.component.html',
  styleUrls: ['./guarding.component.css']
})
export class GuardingComponent implements OnInit {

  islogSkill: boolean = false;

  constructor(
    private guardSkillService: GuardSkillService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.islogSkill = this.guardSkillService.checkAuthSkill()
  }

  signinSkill(val: string) {
    if (val === 'admin@gmail.com') {
      this.guardSkillService.signinSkill();
    } else {
      this.guardSkillService.sinoutSkill();
    }
    console.log(this.guardSkillService.checkAuthSkill());
  }

  iSignSkill() {
     this.router.navigate(['skill'])
  }
  gotoHobby() {
     this.router.navigate(['hobby'])
  }

  gotoAddress(){
    this.router.navigate(['address'])
  }

  gotoCourses(){
    this.router.navigate(['courses'])

  }
}
