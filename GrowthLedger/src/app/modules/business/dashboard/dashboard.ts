import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [CommonModule, MatIconModule],
  templateUrl: './dashboard.html',
  styleUrl: './dashboard.css',
})
export class Dashboard {

  userName = 'Tamanpreet';

  stats = [
    { title: 'Total Funds Raised', value: '₹8,50,000', icon: 'account_balance_wallet' },
    { title: 'Active Investors', value: '12', icon: 'groups' },
    { title: 'Funding Requests', value: '3', icon: 'description' },
    { title: 'Growth Rate', value: '+18%', icon: 'trending_up' }
  ];

  fundingProgress = 65;

  requests = [
    { title: 'Expand Retail Business', amount: '₹5,00,000', status: 'Active' },
    { title: 'New Manufacturing Unit', amount: '₹12,00,000', status: 'Pending' }
  ];

  activities = [
    'Investor Raj showed interest in your project',
    'Funding request approved partially',
    'New message from Investor Aman'
  ];

}
