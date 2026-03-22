import { Component, signal } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MatIconModule } from '@angular/material/icon';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';


@Component({
  selector: 'app-sign-up',
  standalone: true,
  imports: [MatIconModule, FormsModule,ReactiveFormsModule],
  templateUrl: './sign-up.html',
  styleUrl: './sign-up.css',
})
export class SignUp {

  constructor(private routes: ActivatedRoute,private router:Router) { };

  loginFlag = signal<string | null>('');
  ngOnInit() {
    this.routes.queryParams.subscribe((param) => {
      this.loginFlag.set(param['loginType']);
    })
  }

  getBackgroundImage(): string {
    return this.loginFlag() === 'accounting'
      ? 'url(/assets/for_Book_keeping_sign-up.png)'
      : 'url(/assets/for_investing_sign-up.png)';
  }

  //currentStep = 1;
  currentStep = signal<number | null>(1);

  nextStep() {
    this.currentStep.set(2);
  }

  prevStep() {
    this.currentStep.set(1);
  }

  SignUpFormBO= new FormGroup({
    businessName: new FormControl('', [Validators.required]),
    ownerName: new FormControl('', [Validators.required]),
    email: new FormControl('', [Validators.required,Validators.email]),
    phoneNumber: new FormControl('', [Validators.required]),
    password: new FormControl('', [Validators.required,Validators.minLength(8)]),
    businessType: new FormControl('', [Validators.required]),
    gstinNumber: new FormControl('', [Validators.required]),
    businessAddress: new FormControl('', [Validators.required]),
  })

  get businessName(){
    return this.SignUpFormBO.get('businessName');
  }
  get ownerName(){
    return this.SignUpFormBO.get('ownerName');
  }
  get email(){
    return this.SignUpFormBO.get('email');
  }
  get phoneNumber(){
    return this.SignUpFormBO.get('phoneNumber');
  }
  get password(){
    return this.SignUpFormBO.get('password');
  }
  get businessType(){
    return this.SignUpFormBO.get('businessType');
  }
  get gstinNumber(){
    return this.SignUpFormBO.get('gstinNumber');
  }
  get businessAddress(){
    return this.SignUpFormBO.get('businessAddress');
  }

  AccountingSubmitHandle(){
    console.log("CLicked!!")
    this.router.navigate(['login']);
  }
}
