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
    if (!this.isStep1Valid()) {
      // function return true means every validation fullfilled i.e here it becomes false not in if and move the page
      // function return false means every validation not filled i.e here it becomes true i.e not move to next for that make all fields touched
      // ye isliye lagaya kyuki agar ek baar touch hi nahi kara toh phir validation lagegi kaise
      this.markStep1Touched();
      return;
    }
    this.currentStep.set(2);
}


  markStep1Touched(){
  this.SignUpFormBO.get('businessName')?.markAsTouched();
  this.SignUpFormBO.get('ownerName')?.markAsTouched();
  this.SignUpFormBO.get('email')?.markAsTouched();
  this.SignUpFormBO.get('phoneNumber')?.markAsTouched();
  this.SignUpFormBO.get('password')?.markAsTouched();
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
    if(this.SignUpFormBO.invalid){
          this.SignUpFormBO.markAllAsTouched(); // show errors
          return;
    }

    this.router.navigate(['business-dashBoard']);
  }

  isStep1Valid(): boolean | undefined {
    // ye check karega ki agar toh saari validations jo hai vo true hai ya false
    // jo bhi hai vo return karega
    // jab ye true return yani ki saari true hai
    // vaha ! use false kardega ki ha aage ja sakte ho
    // agar ye false return karega ki validations fullfilled nahi hai
    // ! use true kardega ki disabled =  true i.e aage nahi ja sakte
  return (
    this.SignUpFormBO.get('businessName')?.valid &&
    this.SignUpFormBO.get('ownerName')?.valid &&
    this.SignUpFormBO.get('email')?.valid &&
    this.SignUpFormBO.get('phoneNumber')?.valid &&
    this.SignUpFormBO.get('password')?.valid
  );
}

showErr(){
   this.SignUpFormBO.markAllAsTouched();
}


  SignUpFormI= new FormGroup({
    fullName: new FormControl('', [Validators.required]),
    emailAdd: new FormControl('', [Validators.required,Validators.email]),
    phoneNo: new FormControl('', [Validators.required]),
    pwd: new FormControl('', [Validators.required,Validators.minLength(8)]),
  })

  get fullName(){
    return this.SignUpFormI.get('fullName');
  }
  get emailAdd(){
    return this.SignUpFormI.get('emailAdd');
  }
  get phoneNo(){
    return this.SignUpFormI.get('phoneNo');
  }
  get pwd(){
    return this.SignUpFormI.get('pwd');
  }

  InvestingSubmitHandle(){
    if(this.SignUpFormI.invalid){
      this.SignUpFormI.markAllAsTouched();
      return;
      // if there is some field not yet validated do not route
      // show the error instead.
    }
    this.router.navigate(['funder-kyc'],{
      queryParams:{
        fullName:this.SignUpFormI.value.fullName
      }
    });
  }

  goToLogin(){
    this.router.navigate(['login'], {
      queryParams: {
        loginType: this.loginFlag()
      }
    });
  }
}
