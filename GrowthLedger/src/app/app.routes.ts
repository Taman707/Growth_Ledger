import { Routes } from '@angular/router';
import { RoleSelection } from './modules/entry/role-selection/role-selection';
import { SignUp } from './modules/auth/sign-up/sign-up';
import { Login } from './modules/auth/login/login';
import { Dashboard } from './modules/business/dashboard/dashboard';
import { BusinessLayout } from './shared/layouts/business-layout/business-layout';

import { FunderKyc } from './modules/funder/funder-kyc/funder-kyc';
import { FunderKycConfirm } from './modules/funder/funder-kyc-confirm/funder-kyc-confirm';
import { FunderDashboard } from './modules/funder/funder-dashboard/funder-dashboard';

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
      { path: 'dashboard', component: Dashboard },
      // future routes:
      // { path: 'funding', component: Funding },
      // { path: 'investors', component: Investors },
      { path: '', redirectTo: 'dashboard', pathMatch: 'full' }
    ]
  },

  // FUNDER FLOW
  { path: 'funder-kyc', component: FunderKyc },
  { path: 'funder-kyc/confirm', component: FunderKycConfirm },
  { path: 'funder-dashboard', component: FunderDashboard }
];
