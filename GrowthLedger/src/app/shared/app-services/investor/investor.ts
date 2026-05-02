import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class InvestorInfo {
  investorFullName !: any;
  investorEmail !: any;
  investorMobile !: any;
  investorPassword !: any;
}
