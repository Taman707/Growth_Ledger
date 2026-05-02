import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { BusineessOwnerInfo } from '../../../shared/app-services/business-accounting/busineess-owner-info';
import { BusinessOwner } from '../../../shared/models/business-owner.model';
@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [CommonModule, MatIconModule],
  templateUrl: './dashboard.html',
  styleUrl: './dashboard.css',
})
export class Dashboard implements OnInit{
  constructor(
    private businessOwnerInfo : BusineessOwnerInfo
  ){}

  ownerData!:BusinessOwner;

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
  }

}
