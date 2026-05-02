import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class BusineessOwnerInfo {
  businessName !: any;
  ownerName !: any;
  ownerEmail !: any;
  ownerMobile !: any;
  ownerPassword !: any;
  businessType !: any;
  gstNumber !: any;
  businessAdress !: any;
}
