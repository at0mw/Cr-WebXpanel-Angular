import { Injectable } from '@angular/core';
import WebXPanel, { WebXPanelConfigParams, WebXPanelEvents, isActive } from '@crestron/ch5-webxpanel';
const configuration: Partial<WebXPanelConfigParams> = {
	// host: 'ip_address | hostname', // defaults to window.location.host
	ipId: '3|0x03' // string representing a hex value. Might contain "0x" or not. Defaults to "0x03"
	// roomId: 'virtual_control_room_id', // defaults to empty string
};

@Injectable({
	providedIn: 'root'
})
export class WebXPanelService {
	constructor() {
		WebXPanel.addEventListener(WebXPanelEvents.FETCH_TOKEN_FAILED, this.informFailedFetchToken);
		WebXPanel.addEventListener(WebXPanelEvents.CONNECT_WS, this.informConnecting);
		WebXPanel.addEventListener(WebXPanelEvents.CONNECT_CIP, this.informConnectedToWebXpanel);
		WebXPanel.addEventListener(WebXPanelEvents.DISCONNECT_CIP, this.informDisconnectedToWebXpanel);

		WebXPanel.addEventListener(WebXPanelEvents.AUTHENTICATION_REQUIRED, this.informAuthenticationRequired);    
		WebXPanel.addEventListener(WebXPanelEvents.AUTHENTICATION_FAILED, this.informAuthenticationFailed); 
		WebXPanel.addEventListener(WebXPanelEvents.ERROR_WS, this.informError);
    
    
	}

	initializeWebXPanel() {
		if (isActive) {
			console.log('Attempting to initialise webxpanel connection...');
			WebXPanel.initialize(configuration);
		}
	}

	onConnect(callback: () => void) {
		WebXPanel.onConnect(callback);
	}

	informConnecting() {
		console.log('WebXpanel is connecting...');
	}

	informConnectedToWebXpanel(event: CustomEvent) {
		console.log('WebXpanel has connected...');
		const { url, ipId, roomId, tokenSource, tokenUrl } = event.detail;
		console.log(`
      Connected to ${url}, ipId: ${ipId}, roomId: ${roomId}, tokenSource: ${tokenSource}, tokenUrl: ${tokenUrl}
    `);
	}

  informDisconnectedToWebXpanel() {
		console.log('WebXpanel has disconnected...');
	}

	informFailedFetchToken() {
		console.log('WebXpanel has failed to fetch the token...');
	}

  informAuthenticationRequired() {
		console.log('WebXpanel Authentication required...');
  }

  informAuthenticationFailed() {
		console.log('WebXpanel Authentication failed...');    
  }

  informError() {
		console.log('WebXpanel Connection Error...');    
  }
}
