import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-funder-dashboard',
  standalone: true,
  imports: [CommonModule, MatIconModule],
  templateUrl: './funder-dashboard.html',
  styleUrl: './funder-dashboard.css',
})
export class FunderDashboard {

  investorName = 'Investor';

businesses = [
  {
    name: 'GreenTech Solutions',
    industry: 'Sustainability',
    stage: 'Seed',
    fundingNeeded: '₹10,00,000',
    raisedAmount: '₹6,00,000',
    raised: 60,
    roi: '18% Expected',
    risk: 'Medium',
    location: 'Delhi',
    description: 'Eco-friendly energy solutions for modern homes.'
  },
  {
    name: 'QuickBite',
    industry: 'Food & Delivery',
    stage: 'Growth',
    fundingNeeded: '₹5,00,000',
    raisedAmount: '₹2,00,000',
    raised: 40,
    roi: '22% Expected',
    risk: 'High',
    location: 'Mumbai',
    description: 'Fast and affordable food delivery startup.'
  }
];

}
