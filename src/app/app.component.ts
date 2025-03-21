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

  openBridgeLabz(): void {
    window.open(this.bridgeLabzUrl, '_blank');
  }
}
