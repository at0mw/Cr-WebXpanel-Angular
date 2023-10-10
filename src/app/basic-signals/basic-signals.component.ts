import { Component } from '@angular/core';
import { MessageService } from '../services/message.service';
declare var CrComLib: any;

@Component({
  selector: 'app-basic-signals',
  templateUrl: './basic-signals.component.html',
  styleUrls: ['./basic-signals.component.scss']
})
export class BasicSignalsComponent {
  constructor(private messageService: MessageService) {
    CrComLib.subscribeState('s', "1", (value: string) => {
      if (value) {
        this.handleTextUpdate(value);
      }
    });
  }
  inputValue: string = '';
  messageReceived: string = '';

  buttonPressed(buttonId: number): void {
    this.messageService.sendActionMessage(buttonId.toString());
  }

  handleTextInput() {
    this.messageReceived = this.inputValue;
  }

  handleTextUpdate(value: string) {
    console.log("CrComLib :::: Receiving Serial Update ::: Join 1 :: Value : ", value);
    this.messageReceived = value;
  }
}
