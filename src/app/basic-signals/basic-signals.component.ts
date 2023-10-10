import { Component } from '@angular/core';
import { MessageService } from '../services/message.service';
import { StringJoins } from '../protocol/constants/string-joins';
import { DigitalJoins } from '../protocol/constants/digital-joins';

declare var CrComLib: any;

@Component({
  selector: 'app-basic-signals',
  templateUrl: './basic-signals.component.html',
  styleUrls: ['./basic-signals.component.scss']
})
export class BasicSignalsComponent {
  DigitalJoins = DigitalJoins;
  constructor(private messageService: MessageService) {
    CrComLib.subscribeState('s', StringJoins.TextBox1, (value: string) => {
      if (value) {
        this.handleTextUpdate(value);
      }
    });
  }
  inputValue: string = '';
  messageReceived: string = '';

  buttonPressed(buttonId: string): void {
    this.messageService.sendActionMessage(buttonId);
  }

  handleTextInput() {
    this.messageReceived = this.inputValue;
  }

  handleTextUpdate(value: string) {
    console.log("CrComLib :::: Receiving Serial Update ::: Join 1 :: Value : ", value);
    this.messageReceived = value;
  }
}
