import { BaseUser } from './base-user.model';

export interface BusinessOwner extends BaseUser {
  businessName: string;
  ownerName: string;
  businessType: string;
  gstinNumber: string;
  businessAddress: string;
}
