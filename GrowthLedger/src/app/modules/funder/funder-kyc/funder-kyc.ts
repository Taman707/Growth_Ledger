import { Component , signal} from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Investor } from '../../../shared/models/investor.model';

@Component({
  selector: 'app-funder-kyc',
  imports: [FormsModule,ReactiveFormsModule],
  templateUrl: './funder-kyc.html',
  styleUrl: './funder-kyc.css',
})
export class FunderKyc {

  constructor(private route:ActivatedRoute, private router:Router){}

    // class level variable for investor information storage
    receivedInvestorInformation!: Investor;

  fullName=signal<string|null>('');
  ngOnInit(){
    this.route.queryParams.subscribe((param)=>{
      this.fullName.set(param['fullName']);
        if (param['investorInfo']) {
          this.receivedInvestorInformation = JSON.parse(param['investorInfo']);
        }
    })

    if(this.fullName() != ''){
        this.kycFields.patchValue({
          fullN: this.fullName()
        });
    }

    console.log('received obj is ', this.receivedInvestorInformation);

  }

  kycFields = new FormGroup({
    fullN : new  FormControl('',[Validators.required]),
    Dob : new FormControl('',[Validators.required]),
    docUpload : new FormControl('',[Validators.required]),
    selfie : new FormControl('' , [Validators.required])
  })

  get fullN(){
    return this.kycFields.get('fullN');
  }
  get Dob(){
    return this.kycFields.get('Dob');
  }
  get docUpload(){
    return this.kycFields.get('docUpload');
  }
  get selfie(){
    return this.kycFields.get('selfie');
  }

  onFileSelected(event: any) {
  const file = event.target.files[0];
  if (file) {
    this.kycFields.patchValue({ docUpload: file });
  }
}

openCamera() {
  // your camera logic
  this.kycFields.patchValue({ selfie: 'captured' }); // temp
}

handleSubmit() {
  if (this.kycFields.invalid) {
    this.kycFields.markAllAsTouched();
    return;
  }

  this.router.navigate(['/funder-kyc/confirm'],{
    queryParams:{
      basicInfo : JSON.stringify(this.receivedInvestorInformation)
    }
  })

}
}
