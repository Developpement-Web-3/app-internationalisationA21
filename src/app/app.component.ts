import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  todaysDate = Date.now();
  accountBalance = "100";
  zeroMinutes = 0;
  oneMinute = 1;
  twoMinutes = 2;
}
