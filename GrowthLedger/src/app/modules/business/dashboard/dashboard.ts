// dashboard.ts

import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

import { BusineessOwnerInfo } from '../../../shared/app-services/business-accounting/busineess-owner-info';
import { BusinessOwner } from '../../../shared/models/business-owner.model';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [CommonModule, MatIconModule, FormsModule],
  templateUrl: './dashboard.html',
  styleUrl: './dashboard.css'
})
export class Dashboard implements OnInit {

  constructor(
    private businessOwnerInfo: BusineessOwnerInfo,
    private router: Router
  ) {}

  ownerData!: BusinessOwner;

  /* ---------- NOTES ---------- */
  userNotes: string = '';
  notesSaved: boolean = false;

  /* ---------- USER STATE ---------- */
  isNewUser: boolean = true;
  totalEntries: number = 4;

  /* ---------- CALENDAR ---------- */
  monthNames = [
    'January','February','March','April','May','June',
    'July','August','September','October','November','December'
  ];

  currentDate = new Date();
  currentMonth = this.currentDate.getMonth();
  currentYear = this.currentDate.getFullYear();

  calendarDays: number[] = [];
  selectedDay: number = 0;
  showPopup: boolean = false;

  selectedDayData: any = {};

  /* ---------- ANALYTICS ---------- */
  monthlyIncoming = 242000;
  monthlyExpense = 118000;
  balance = 124000;
  investorReadiness = 74;

  incomeTrend: number[] = [45, 60, 30, 75, 58, 90, 72];
  expenseTrend: number[] = [35, 50, 42, 62, 48, 70, 40];

  insights = [
    {
      icon:'payments',
      title:'Pending Receivables',
      value:'₹34,000',
      subtitle:'3 customers pending payment'
    },
    {
      icon:'storefront',
      title:'Top Revenue Source',
      value:'Retail Sales',
      subtitle:'42% of monthly income'
    },
    {
      icon:'campaign',
      title:'Growth Tip',
      value:'Run weekend offers',
      subtitle:'Sales peak on Fri / Sat'
    },
    {
      icon:'verified',
      title:'Investor Score',
      value:'74 / 100',
      subtitle:'Complete KYC to improve'
    }
  ];

  ngOnInit(): void {

    this.ownerData = {
      ownerName: this.businessOwnerInfo.ownerName,
      email: this.businessOwnerInfo.ownerEmail,
      phoneNumber: this.businessOwnerInfo.ownerMobile,
      password: this.businessOwnerInfo.ownerPassword,
      businessAddress: this.businessOwnerInfo.businessAdress,
      businessName: this.businessOwnerInfo.businessName,
      gstinNumber: this.businessOwnerInfo.gstNumber,
      businessType: this.businessOwnerInfo.businessType
    };

    this.isNewUser = this.totalEntries < 7;

    this.generateCalendar();

    this.userNotes =
      localStorage.getItem('growthledger_notes') || '';

      const savedNotes = localStorage.getItem('growthledger_today_notes');

if(savedNotes){
  this.todayNotes = JSON.parse(savedNotes);
}
  }

  /* ---------- NOTES ---------- */
saveNotes(){

  if(!this.noteInput.trim()) return;

  this.todayNotes.push(this.noteInput);

  localStorage.setItem(
    'growthledger_today_notes',
    JSON.stringify(this.todayNotes)
  );

  this.noteInput = '';

  this.notesSaved = true;

  setTimeout(()=>{
    this.notesSaved = false;
  },1500);
}

  /* ---------- NAV ---------- */
goToLedger() {
  this.showLedgerPopup = true;
}
closeLedgerPopup(){
  this.showLedgerPopup = false;
}

openFullLedger(){
  this.showLedgerPopup = false;
  this.router.navigate(['/business/ledgerbook']);
}

  /* ---------- CALENDAR ---------- */
  generateCalendar() {

    this.calendarDays = [];

    const firstDay = new Date(
      this.currentYear,
      this.currentMonth,
      1
    ).getDay();

    const totalDays = new Date(
      this.currentYear,
      this.currentMonth + 1,
      0
    ).getDate();

    for (let i = 0; i < firstDay; i++) {
      this.calendarDays.push(0);
    }

    for (let d = 1; d <= totalDays; d++) {
      this.calendarDays.push(d);
    }
  }

  nextMonth() {

    this.currentMonth++;

    if (this.currentMonth > 11) {
      this.currentMonth = 0;
      this.currentYear++;
    }

    this.generateCalendar();
  }

  prevMonth() {

    this.currentMonth--;

    if (this.currentMonth < 0) {
      this.currentMonth = 11;
      this.currentYear--;
    }

    this.generateCalendar();
  }

  openDayPopup(day: number) {

    if (day === 0) return;

    this.selectedDay = day;

    this.selectedDayData = {
      incoming: '₹12,500',
      outgoing: '₹4,200',
      note: '2 ledger entries added',
      tasks: 'Supplier follow-up'
    };

    this.showPopup = true;
  }

  closePopup() {
    this.showPopup = false;
  }

  noteInput:string = '';
todayNotes:string[] = [];

showLedgerPopup:boolean = false;

recentLedger = [
  {
    title:'Customer Payment',
    time:'10:20 AM',
    amount:'+ ₹12,000'
  },
  {
    title:'Packaging Expense',
    time:'12:10 PM',
    amount:'- ₹2,400'
  },
  {
    title:'Online Order',
    time:'2:40 PM',
    amount:'+ ₹6,800'
  }
];
}
