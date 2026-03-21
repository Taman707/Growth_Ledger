import { Routes } from '@angular/router';
import { RoleSelection } from './modules/entry/role-selection/role-selection';
import { SignUp } from './modules/auth/sign-up/sign-up';

export const routes: Routes = [
    { path: '', redirectTo: 'entry', pathMatch: 'full' },
    { path: 'entry', component: RoleSelection },
    { path: 'sign-up', component: SignUp }

];
