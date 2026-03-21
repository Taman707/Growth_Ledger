import { Component } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-role-selection',
  imports: [],
  templateUrl: './role-selection.html',
  styleUrl: './role-selection.css',
})
export class RoleSelection {

  constructor(private router: Router) { };

  handleClick(val: string) {
    this.router.navigate(['sign-up'], {
      queryParams: {
        loginType: val
      }
    });
  }
}
