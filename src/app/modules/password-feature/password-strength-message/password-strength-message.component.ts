import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-password-strength-message',
  templateUrl: './password-strength-message.component.html',
  styleUrl: './password-strength-message.component.scss'
})
export class PasswordStrengthMessageComponent {
  @Input() strength: string = 'empty';

  getPasswordMessage(): string {
    const messages: { [key: string]: string } = {
      empty: 'Password is required',
      short: 'Password is too short',
      easy: 'Password must contains letters, symbols and numbers',
      medium: 'Password must contains letters, symbols and numbers',
      strong: 'Password is strong'
    };

    return messages[this.strength] || 'Password is required';
  }

  getPasswordMessageColor(): string {
    const colorMap: { [key: string]: string } = {
      empty: 'message-red',
      short: 'message-red',
      easy: 'message-red',
      medium: 'message-yellow',
      strong: 'message-green'
    };

    return colorMap[this.strength] || 'message-red';
  }
}
