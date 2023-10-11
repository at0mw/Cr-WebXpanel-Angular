import { Component } from '@angular/core';
import { faCoffee, faSpinner, faX } from '@fortawesome/free-solid-svg-icons';
import { ConnectionEventService } from '../services/connection.event.service';

@Component({
  selector: 'app-disconnect-overlay',
  templateUrl: './disconnect-overlay.component.html',
  styleUrls: ['./disconnect-overlay.component.scss']
})
export class DisconnectOverlayComponent {
  isOverlayVisible = true;
  currentIcon = faSpinner;
  connectionState = "Unknown";
  isSpinning: boolean = true;
  infoText = "";

  constructor(private eventService: ConnectionEventService) {
    this.eventService.onConnected().subscribe(() => this.clientConnected());
    this.eventService.onDisconnected().subscribe(() => this.clientDisconnected());
    this.eventService.onConnecting().subscribe(() => this.clientConnecting());
    this.eventService.onFetchTokenFailed().subscribe(() => this.clientFetchTokenFailed());
  }

  clientConnected() {
    console.log("Disable overlay...");
    this.isOverlayVisible = false;
    this.currentIcon = faCoffee;
    this.connectionState = "Connected";
    this.infoText = "";
    this.isSpinning = false;
  }

  clientDisconnected() {
    console.log("Enable overlay...");
    this.isOverlayVisible = true;
    this.currentIcon = faCoffee;
    this.connectionState = "Disconnected";
    this.infoText = "";
    this.isSpinning = false;
  }

  clientConnecting() {
    this.currentIcon = faSpinner;
    this.connectionState = "Connecting";
    this.infoText = "";
    this.isSpinning = true;
  }

  clientAuthenticationRequired() {

  }

  clientFetchTokenFailed() {
    console.log("Excuse me mate");
    this.currentIcon = faX;
    this.isSpinning = false;
    this.connectionState = "Error";
    this.infoText = "Invalid Token Received";
  }
}
