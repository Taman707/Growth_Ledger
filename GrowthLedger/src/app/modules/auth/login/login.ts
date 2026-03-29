import { Component, signal } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  imports: [FormsModule,ReactiveFormsModule],
  templateUrl: './login.html',
  styleUrl: './login.css',
})
export class Login {

  constructor(private routes:ActivatedRoute , private router:Router){}
  loginFlag = signal<string | null>('');
    ngOnInit() {
    this.routes.queryParams.subscribe((param) => {
      this.loginFlag.set(param['loginType']);
    })
  }

  relocateToDashboard(){

    if (this.loginForm.invalid) {
      this.loginForm.markAllAsTouched();
      return;
    }
    if(this.loginFlag() === 'accounting'){
      this.router.navigate(['business-dashBoard']);
      return;
    }else{
      this.router.navigate(['funder-dashboard']);
    }
  }

  loginForm = new FormGroup({
    emailOrPhone : new FormControl('',[Validators.required]),
    password : new FormControl('' , [Validators.required])
  })

  get emailOrPhone(){
    return this.loginForm.get('emailOrPhone');
  }
  get password(){
    return this.loginForm.get('password');
  }


  goTOSignUp(){
    this.router.navigate(['sign-up'] , {
      queryParams:{
        loginType: this.loginFlag()
      }
    })
  }

}
