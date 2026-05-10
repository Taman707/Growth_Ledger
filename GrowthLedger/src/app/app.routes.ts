import { Routes } from '@angular/router';
import { RoleSelection } from './modules/entry/role-selection/role-selection';
import { SignUp } from './modules/auth/sign-up/sign-up';
import { Login } from './modules/auth/login/login';
import { Dashboard } from './modules/business/dashboard/dashboard';
import { BusinessLayout } from './shared/layouts/business-layout/business-layout';

import { FunderKyc } from './modules/funder/funder-kyc/funder-kyc';
import { FunderKycConfirm } from './modules/funder/funder-kyc-confirm/funder-kyc-confirm';
import { FunderDashboard } from './modules/funder/funder-dashboard/funder-dashboard';
import { AboutUs } from './shared/common-about-us/about-us/about-us';
import { InvestorContact } from './modules/business/investor-window/investor-contact/investor-contact';
import { AnalysisDash } from './modules/business/analysis-dashboard/analysis-dash/analysis-dash';
import { InvestorLayout } from './shared/layouts/investor-layout-framework/investor-layout/investor-layout';

export const routes: Routes = [
  { path: '', redirectTo: 'entry', pathMatch: 'full' },

  // ENTRY FLOW
  { path: 'entry', component: RoleSelection },
  { path: 'sign-up', component: SignUp },
  { path: 'login', component: Login },

  // ✅ BUSINESS SECTION (WITH LAYOUT)
  {
    path: 'business',
    component: BusinessLayout,
    children: [
      { path: 'home', component: Dashboard },
      { path: 'about-us' , component: AboutUs},
      { path: 'dashboard', component: AnalysisDash},
      { path: 'investor-contact', component: InvestorContact},
      { path: '', redirectTo: 'home', pathMatch: 'full' }
    ]
  },

  // FUNDER FLOW
  { path: 'funder-kyc', component: FunderKyc },
  { path: 'funder-kyc/confirm', component: FunderKycConfirm },


{
  path: 'investor',
  component: InvestorLayout,
  children: [

    {
      path: '',
      redirectTo: 'funder-dashboard',
      pathMatch: 'full'
    },

    {
      path: 'funder-dashboard',
      component: FunderDashboard
    },
    { path: 'about-us' , component: AboutUs},


  ]
}
];
