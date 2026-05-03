// nav-bar.ts

import { Component } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-nav-bar',
  imports: [MatIconModule,RouterModule],
  templateUrl: './nav-bar.html',
  styleUrl: './nav-bar.css'
})
export class NavBar {

  menuOpen = false;

  // later connect with service
  kycDone = false;

  constructor(private router: Router) {}

  toggleMenu() {
    this.menuOpen = !this.menuOpen;
  }

  closeMenu() {
    this.menuOpen = false;
  }

  handleCTA() {
    if (this.kycDone) {
      this.router.navigate(['/business/investors']);
    } else {
      this.router.navigate(['/funder-kyc']);
    }

    this.closeMenu();
  }

}
