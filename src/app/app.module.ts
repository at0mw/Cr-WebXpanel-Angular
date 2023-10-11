import { APP_INITIALIZER, CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BasicSignalsComponent } from './basic-signals/basic-signals.component';
import { SliderElementComponent } from './slider-element/slider-element.component';
import { FormsModule } from '@angular/forms';
import { APP_BASE_HREF } from "@angular/common";
import { WebXPanelService } from "./services/web.xpanel.service";
import { ConnectionEventService } from './services/connection.event.service';
import { DisconnectOverlayComponent } from './disconnect-overlay/disconnect-overlay.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';


const webXPanelFactory = (webService: WebXPanelService) => () => {
  webService.initializeWebXPanel();
} 

@NgModule({
  declarations: [
    AppComponent,
    BasicSignalsComponent,
    SliderElementComponent,
    DisconnectOverlayComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    FontAwesomeModule
  ],
  providers: [
    { provide: APP_INITIALIZER, useFactory: webXPanelFactory, multi: true, deps: [WebXPanelService] },
    {provide: APP_BASE_HREF, useValue: './cr-webxpanel-angular/'}
  ],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA],
  bootstrap: [AppComponent]
})
export class AppModule { }
