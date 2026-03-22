import { Component, signal } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-login',
  imports: [],
  templateUrl: './login.html',
  styleUrl: './login.css',
})
export class Login {

  constructor(private routes:ActivatedRoute){}
  loginFlag = signal<string | null>('');
    ngOnInit() {
    this.routes.queryParams.subscribe((param) => {
      this.loginFlag.set(param['loginType']);
    })
  }

}
