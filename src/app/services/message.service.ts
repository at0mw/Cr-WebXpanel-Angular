import { Injectable } from '@angular/core';
declare var CrComLib: any;

@Injectable({
  providedIn: 'root',
})
export class MessageService {
  constructor() {}

  sendActionMessage(actionJoinId: string): void {
    console.log(`CrComLib :::: Publish :: Action : Join Id ${actionJoinId}`);
    CrComLib.publishEvent('b', actionJoinId, true);
    CrComLib.publishEvent('b', actionJoinId, false);
  }

  sendAnalogMessage(analogJoinId: string, value: number): void {
    console.log(`CrComLib :::: Publish ::: Analog :: Join Id ${analogJoinId} : Value ${value}`);
    CrComLib.publishEvent('n', analogJoinId, value);
  }

  sendDigitalMessage(digitalJoinId: string, state: boolean): void {
    console.log(`CrComLib :::: Publish ::: Digital :: Join Id ${digitalJoinId} : State ${state}`);
    CrComLib.publishEvent('b', digitalJoinId, state);
  }

  sendStringMessage(stringJoinId: string, value: string): void {
    console.log(`CrComLib :::: Publish ::: String :: Join Id ${stringJoinId} : Value ${value}`);
    CrComLib.publishEvent('s', stringJoinId, value);
  }
}
