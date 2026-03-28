import { Routes } from '@angular/router';
import { RoleSelection } from './modules/entry/role-selection/role-selection';
import { SignUp } from './modules/auth/sign-up/sign-up';
import { Login } from './modules/auth/login/login';
import { Dashboard } from './modules/business/dashboard/dashboard';
import { FunderKyc } from './modules/funder/funder-kyc/funder-kyc';
import { FunderKycConfirm } from './modules/funder/funder-kyc-confirm/funder-kyc-confirm';

export const routes: Routes = [
    { path: '', redirectTo: 'entry', pathMatch: 'full' },
    { path: 'entry', component: RoleSelection },
    { path: 'sign-up', component: SignUp },
    { path: 'login' , component: Login},
    { path: 'business-dashBoard' , component:Dashboard},
    { path: 'funder-kyc' , component:FunderKyc},
    { path: 'funder-kyc/confirm' , component:FunderKycConfirm}
];
