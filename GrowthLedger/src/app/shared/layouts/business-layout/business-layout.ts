import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavBar } from '../../NavBar/nav-bar/nav-bar';

@Component({
  selector: 'app-business-layout',
  imports: [RouterOutlet,NavBar],
  templateUrl: './business-layout.html',
  styleUrl: './business-layout.css',
})
export class BusinessLayout {

}
