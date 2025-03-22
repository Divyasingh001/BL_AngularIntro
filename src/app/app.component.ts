import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  message: string = 'Hello from BridgeLabz';
  logoUrl: string = 'assets/BridgeLabz.jpg';
  bridgeLabzUrl: string = 'https://www.bridgelabz.com';
  userName: string = '';
  errorMessage: string = '';

  openBridgeLabz(): void {
    window.open(this.bridgeLabzUrl, '_blank');
  }

  validateName(): void {
    const namePattern = /^[A-Z][a-zA-Z]{2,}$/;
    if (!namePattern.test(this.userName)) {
      this.errorMessage = 'Invalid Name! Ensure it starts with a capital letter and has at least 3 letters.';
    } else {
      this.errorMessage = '';
    }
  }
}
