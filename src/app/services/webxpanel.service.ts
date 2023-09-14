import { Injectable } from '@angular/core';
import { isActive, getVersion } from '@crestron/ch5-webxpanel';
import WebXPanel, { WebXPanelEvents } from '@crestron/ch5-webxpanel';

@Injectable({
  providedIn: 'root',
})
export class WebXPanelService {
  constructor() {
    WebXPanel.addEventListener(WebXPanelEvents.FETCH_TOKEN_FAILED, this.informFailedFetchToken)
    WebXPanel.addEventListener(
      WebXPanelEvents.CONNECT_CIP,
      (event: CustomEvent) => {
        const { url, ipId, roomId, tokenSource, tokenUrl } = event.detail;
        console.log(
          `Connected to ${url}, ipId: ${ipId}, roomId: ${roomId}, tokenSource: ${tokenSource}, tokenUrl: ${tokenUrl}`
        );
      }
    );
  }

  printStatus() {
    console.log(`WebXPanel isActive: ${isActive}`);
    console.log(`WebXPanel Version: ${getVersion()}`);
  }

  informIsConnected() {
    console.log('WebXpanel has connected...');
  }

  informFailedFetchToken() {
    console.log('WebXpanel has failed to fetch the token...');
  }
}
