// in-nav-bar.ts

import { Component } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-in-nav-bar',
  standalone: true,
  imports: [RouterModule, MatIconModule],
  templateUrl: './in-nav-bar.html',
  styleUrl: './in-nav-bar.css'
})
export class InNavBar {

  menuOpen = false;

  // connect later from service
  kycDone = true;

  constructor(private router: Router) {}

  toggleMenu() {
    this.menuOpen = !this.menuOpen;
  }

  closeMenu() {
    this.menuOpen = false;
  }

}
