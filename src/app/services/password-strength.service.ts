import { Injectable } from '@angular/core';
@Injectable({
  providedIn: 'root'
})
export class PasswordStrengthService {

  constructor() { }

  /**
   * Determines the strength of the given password based on various criteria.
   * @param password - The password to be checked.
   * @returns string | null - A string indicating the strength of the password ('easy', 'medium', 'strong') or 'short' if the password is too short. Returns null if no password is provided.
   */
  static getPasswordStrength(password: string): string | null {
    if (!password) {
      return null;
    }

    if (password.length < 8) {
      return 'short';
    }

    const hasLatinLetters = /[a-zA-Z]/.test(password);
    const hasCyrillicLetters = /[\u0400-\u04FF]/.test(password);
    const hasNumbers = /[0-9]/.test(password);
    const hasSymbols = /[^a-zA-Z\u0400-\u04FF0-9]/.test(password);
    const hasLetters = hasLatinLetters || hasCyrillicLetters;

    const strength: number = [hasLetters, hasNumbers, hasSymbols].filter(Boolean).length;

    const strengthMap: { [key: number]: string } = {
      1: 'easy',
      2: 'medium',
      3: 'strong'
    };

    return strengthMap[strength] || null;
  }
}
