import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PasswordTaskDetailsService {
  getDetailsContent() {
    return `
      <p><strong>The essence of the assignment:</strong></p>
      <ul>
        <li>Create a field for entering a password, under the field add 3 sections which will show the strength of the password;</li>
        <li>Changes in password strength must take place in real time;</li>
        <li>How to calculate the strength of a password:
          <ul>
            <li>Only letters/digits/symbols - the password is easy;</li>
            <li>Combination of letters-symbols/letters-digits/digits-symbols - the password is medium;</li>
            <li>Has letters, symbols and numbers - the password is strong;</li>
          </ul>
        </li>
        <li>The color of the sections will depend on the strength of the password:
          <ul>
            <li>If the field is empty, all sections are gray;</li>
            <li>If the field has less than 8 characters, all sections are red;</li>
            <li>If the password is easy - the first section is red the rest are gray;</li>
            <li>If the password is medium - the first two sections are yellow the last one is gray;</li>
            <li>If the password is strong, all sections are green;</li>
          </ul>
        </li>
      </ul>
    `;
  }
}
