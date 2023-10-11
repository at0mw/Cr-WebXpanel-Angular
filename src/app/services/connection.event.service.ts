import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ConnectionEventService {
  private fetchTokenFailed = new Subject<void>();
  private connecting = new Subject<void>();
  private connected = new Subject<void>();
  private disconnected = new Subject<void>();
  private authenticationRequired = new Subject<void>();
  private authenticationFailed = new Subject<void>();
  private errorWs = new Subject<void>();

  informFetchTokenFailed() {
    console.log("Notifying Forthwith!!");
    this.fetchTokenFailed.next();
  }

  informConnecting() {
    this.connecting.next();
  }

  informConnected() {
    this.connected.next();
  }

  informDisconnected() {
    this.disconnected.next();
  }

  informAuthenticationRequired() {
    this.authenticationRequired.next();
  }

  informAuthenticationFailed() {
    this.authenticationFailed.next();
  }

  informErrorWs() {
    this.errorWs.next();
  }

  onFetchTokenFailed() {
    console.log("Subscribing with great haste!!");
    return this.fetchTokenFailed.asObservable();
  }

  onConnecting() {
    return this.connecting.asObservable();
  }

  onConnected() {
    return this.connected.asObservable();
  }

  onDisconnected() {
    return this.disconnected.asObservable();
  }

  onAuthenticationRequired() {
    return this.authenticationRequired.asObservable();
  }

  onAuthenticationFailed() {
    return this.authenticationFailed.asObservable();
  }

  onErrorWs() {
    return this.errorWs.asObservable();
  }
}
