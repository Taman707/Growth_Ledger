import { Component, signal } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-sign-up',
  imports: [],
  templateUrl: './sign-up.html',
  styleUrl: './sign-up.css',
})
export class SignUp {

  constructor(private routes: ActivatedRoute) { };

  loginFlag = signal<string | null>('');
  ngOnInit() {
    this.routes.queryParams.subscribe((param) => {
      this.loginFlag.set(param['loginType']);
    })
  }

}
