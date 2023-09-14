import WebXPanel, {WebXPanelConfigParams, isActive} from "@crestron/ch5-webxpanel";
const configuration: Partial<WebXPanelConfigParams> = {
  host: 'ip_address | hostname', // defaults to window.location.host
  ipId: '3|0x03', // string representing a hex value. Might contain "0x" or not. Defaults to "0x03"
  roomId: 'virtual_control_room_id', // defaults to empty string
};

const webXPanelFactory = () => () => {
  if (isActive) {
    WebXPanel.initialize(configuration);
  }
}

import { APP_INITIALIZER, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BasicSignalsComponent } from './basic-signals/basic-signals.component';
import { SliderElementComponent } from './slider-element/slider-element.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    BasicSignalsComponent,
    SliderElementComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [
    { provide: APP_INITIALIZER, useFactory: webXPanelFactory, multi: true }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
