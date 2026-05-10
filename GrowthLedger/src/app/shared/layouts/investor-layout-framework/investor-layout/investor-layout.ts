import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { InNavBar } from '../../../NavBar/investor-nav-bar/in-nav-bar/in-nav-bar';

@Component({
  selector: 'app-investor-layout',
  imports: [RouterOutlet,InNavBar],
  templateUrl: './investor-layout.html',
  styleUrl: './investor-layout.css',
})
export class InvestorLayout {

}
