import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { BusineessOwnerInfo } from '../../../../shared/app-services/business-accounting/busineess-owner-info';

@Component({
  selector: 'app-investor-contact',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './investor-contact.html',
  styleUrl: './investor-contact.css'
})
export class InvestorContact implements OnInit {

  constructor(
    private businessOwnerInfo: BusineessOwnerInfo,
    private router: Router
  ) {}

  isKycDone: boolean = false;

  proposal = {
    amount: '',
    equity: '',
    purpose: ''
  };

  interestedInvestors = [
    {
      name: 'Apex Capital',
      interest: '₹20L - ₹35L',
      type: 'Retail Growth',
      roi: '15%'
    },
    {
      name: 'Nova Ventures',
      interest: '₹10L - ₹18L',
      type: 'Food & FMCG',
      roi: '12%'
    },
    {
      name: 'Titan Angels',
      interest: '₹30L+',
      type: 'Scalable SMEs',
      roi: '18%'
    }
  ];

  ngOnInit(): void {
    this.isKycDone = this.businessOwnerInfo.kycStatus;
    this.isKycDone = true;
  }

  goToKyc() {
    this.router.navigate(['/business/kyc']);
  }

  submitProposal() {
    alert('Funding proposal submitted successfully!');
  }
}
