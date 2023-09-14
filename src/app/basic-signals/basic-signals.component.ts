import { Component } from '@angular/core';
import { MessageService } from '../services/message.service'

@Component({
  selector: 'app-basic-signals',
  templateUrl: './basic-signals.component.html',
  styleUrls: ['./basic-signals.component.scss']
})
export class BasicSignalsComponent {
  constructor(private messageService: MessageService) {}
  inputValue: string = '';
  messageReceived: string = '';

  buttonPressed(buttonId: number): void {
    console.log("Button Pressed...");
    console.log("Button Pressed :: Destination : ", buttonId);
    this.messageService.sendActionMessage(buttonId.toString());
  }

  handleTextInput() {
    // Handle the text input changes
    console.log(`Input Value: ${this.inputValue}`);
    // You can perform any actions you need with the input value.
    this.messageReceived = this.inputValue;
  }
}
