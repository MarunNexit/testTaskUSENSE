import {Component, Input, OnChanges} from '@angular/core';


enum Strength {
  EMPTY = 'empty',
  SHORT = 'short',
  EASY = 'easy',
  MEDIUM = 'medium',
  STRONG = 'strong'
}


@Component({
  selector: 'app-password-strength-bar',
  templateUrl: './password-strength-bar.component.html',
  styleUrl: './password-strength-bar.component.scss'
})
export class PasswordStrengthBarComponent implements OnChanges {
  @Input() strength: string = 'empty';
  barColors: string[] = ['gray', 'gray', 'gray'];

  private strengthColors: { [key in Strength]: string[] } = {
    [Strength.EMPTY]: ['gray', 'gray', 'gray'],
    [Strength.SHORT]: ['red', 'red', 'red'],
    [Strength.EASY]: ['red', 'gray', 'gray'],
    [Strength.MEDIUM]: ['yellow', 'yellow', 'gray'],
    [Strength.STRONG]: ['green', 'green', 'green']
  };

  ngOnChanges() {
    this.setBarColors();
  }

  setBarColors() {
    this.barColors = this.strengthColors[this.strength as Strength] || this.strengthColors[Strength.EMPTY];
  }

  getBarClass(index: number) {
    return this.barColors[index - 1];
  }
}
