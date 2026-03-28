import { Component , signal} from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-funder-kyc',
  imports: [FormsModule,ReactiveFormsModule],
  templateUrl: './funder-kyc.html',
  styleUrl: './funder-kyc.css',
})
export class FunderKyc {

  constructor(private route:ActivatedRoute){}

  fullName=signal<string|null>('');
  ngOnInit(){
    this.route.queryParams.subscribe((param)=>{
      this.fullName.set(param['fullName']);
    })
    if(this.fullName() != ''){
        this.kycFields.patchValue({
          fullN: this.fullName()
        });
    }
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
  console.log(file);
}

openCamera() {
  console.log("Camera trigger");
}

handleSubmit(){

}
}
