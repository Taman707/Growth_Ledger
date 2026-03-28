import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Investor } from '../../../shared/models/investor.model';

@Component({
  selector: 'app-funder-kyc-confirm',
  imports: [],
  templateUrl: './funder-kyc-confirm.html',
  styleUrl: './funder-kyc-confirm.css',
})
export class FunderKycConfirm {

  constructor(private route:ActivatedRoute){}

  basicInvestorInfo !:Investor;

  ngOnInit(){
    this.route.queryParams.subscribe((param)=>{
      if(param['basicInfo']){
        this.basicInvestorInfo = JSON.parse(param['basicInfo']);
      }
      console.log("in the confirm page",this.basicInvestorInfo);
    })
  }
}
