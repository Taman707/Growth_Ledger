import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Investor } from '../../../shared/models/investor.model';
import { KycInfo } from '../../../shared/models/kyc-info.model';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-funder-kyc-confirm',
  imports: [MatIconModule],
  templateUrl: './funder-kyc-confirm.html',
  styleUrl: './funder-kyc-confirm.css',
})
export class FunderKycConfirm {

  constructor(private route:ActivatedRoute){}

  basicInvestorInfo !:Investor;
  kycInfo!: KycInfo;
  ngOnInit(){
    this.route.queryParams.subscribe((param)=>{
      if(param['basicInfo']){
        this.basicInvestorInfo = JSON.parse(param['basicInfo']);
      }
      if(param['kycSpecInfo']){
        this.kycInfo = JSON.parse(param['kycSpecInfo']);
      }
      console.log("in the confirm page",this.basicInvestorInfo);
      console.log("2nd in the confirm page",this.kycInfo);
    })
  }
}
