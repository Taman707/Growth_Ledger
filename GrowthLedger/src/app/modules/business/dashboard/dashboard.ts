// dashboard.ts

import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { BusineessOwnerInfo } from '../../../shared/app-services/business-accounting/busineess-owner-info';
import { BusinessOwner } from '../../../shared/models/business-owner.model';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [CommonModule, MatIconModule,FormsModule],
  templateUrl: './dashboard.html',
  styleUrl: './dashboard.css'
})
export class Dashboard implements OnInit {

  constructor(private businessOwnerInfo: BusineessOwnerInfo) {}

userNotes:string = '';
notesSaved:boolean = false;

saveNotes(){

  localStorage.setItem('growthledger_notes', this.userNotes);

  this.notesSaved = true;

  setTimeout(() => {
    this.notesSaved = false;
  }, 2000);
}
  ownerData!: BusinessOwner;

  // ---------- USER STATE ----------
  isNewUser:boolean = true; // later replace from API
  totalEntries:number = 4;  // later replace from API

  // ---------- CALENDAR ----------
  monthNames = [
    'January','February','March','April','May','June',
    'July','August','September','October','November','December'
  ];

  currentDate = new Date();
  currentMonth = this.currentDate.getMonth();
  currentYear = this.currentDate.getFullYear();

  calendarDays:number[] = [];
  selectedDay:number = 0;
  showPopup:boolean = false;

  selectedDayData:any = {};

  // ---------- HARDCODED ANALYTICS (API REPLACEABLE) ----------
  monthlyIncoming = 242000;
  monthlyExpense = 118000;
  balance = 124000;
  investorReadiness = 74;

  incomeTrend:number[] = [45, 60, 30, 75, 58, 90, 72];
  expenseTrend:number[] = [35, 50, 42, 62, 48, 70, 40];

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
      subtitle:'Sales peak on Friday/Saturday'
    },
    {
      icon:'verified',
      title:'Investor Score',
      value:'74 / 100',
      subtitle:'Complete KYC to improve score'
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

    // dynamic user stage
    this.isNewUser = this.totalEntries < 7;

    this.generateCalendar();

    this.userNotes =
localStorage.getItem('growthledger_notes') || '';
  }

  // ---------- CALENDAR ----------
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

    for(let i=0;i<firstDay;i++){
      this.calendarDays.push(0);
    }

    for(let d=1; d<=totalDays; d++){
      this.calendarDays.push(d);
    }
  }

  nextMonth(){
    this.currentMonth++;

    if(this.currentMonth > 11){
      this.currentMonth = 0;
      this.currentYear++;
    }

    this.generateCalendar();
  }

  prevMonth(){
    this.currentMonth--;

    if(this.currentMonth < 0){
      this.currentMonth = 11;
      this.currentYear--;
    }

    this.generateCalendar();
  }

  openDayPopup(day:number){

    if(day === 0) return;

    this.selectedDay = day;

    // later from API
    this.selectedDayData = {
      incoming: '₹12,500',
      outgoing: '₹4,200',
      note: '2 ledger entries added'
    };

    this.showPopup = true;
  }

  closePopup(){
    this.showPopup = false;
  }

}
