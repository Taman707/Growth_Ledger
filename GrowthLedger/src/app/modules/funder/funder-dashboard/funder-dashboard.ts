import { Component,OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { InvestorInfo } from '../../../shared/app-services/investor/investor';
import { Investor } from '../../../shared/models/investor.model'
@Component({
  selector: 'app-funder-dashboard',
  standalone: true,
  imports: [CommonModule, MatIconModule],
  templateUrl: './funder-dashboard.html',
  styleUrl: './funder-dashboard.css',
})
export class FunderDashboard implements OnInit{

  investorData !: Investor;
  constructor(
    private InvestorInfoService : InvestorInfo
  ){}

  ngOnInit(){
    this.investorData = {
    fullName: this.InvestorInfoService.investorFullName,
    email: this.InvestorInfoService.investorEmail,
    phoneNumber: this.InvestorInfoService.investorMobile,
    password: this.InvestorInfoService.investorPassword
    }
  }
}
