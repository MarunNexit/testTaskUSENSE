import { TestBed } from '@angular/core/testing';
import { PasswordStrengthService } from './password-strength.service';

describe('PasswordStrengthService', () => {
  let service: PasswordStrengthService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PasswordStrengthService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should return null if password is empty', () => {
    const password = '';
    const result = PasswordStrengthService.getPasswordStrength(password);
    expect(result).toBeNull();
  });

  it('should return "short" if password is less than 8 characters', () => {
    const password = 'short';
    const result = PasswordStrengthService.getPasswordStrength(password);
    expect(result).toEqual('short' );
  });

  it('should return "easy" if password contains only letters', () => {
    const password = 'abcdefgh';
    const result = PasswordStrengthService.getPasswordStrength(password);
    expect(result).toEqual( 'easy' );
  });

  it('should return "easy" if password contains only numbers', () => {
    const password = '12345678';
    const result = PasswordStrengthService.getPasswordStrength(password);
    expect(result).toEqual('easy');
  });

  it('should return "easy" if password contains only symbols', () => {
    const password = '!@#$%^&*';
    const result = PasswordStrengthService.getPasswordStrength(password);
    expect(result).toEqual('easy' );
  });

  it('should return "medium" if password contains letters and numbers', () => {
    const password = 'abc12345';
    const result = PasswordStrengthService.getPasswordStrength(password);
    expect(result).toEqual('medium' );
  });

  it('should return "medium" if password contains letters and symbols', () => {
    const password = 'abcde!@#g';
    const result = PasswordStrengthService.getPasswordStrength(password);
    expect(result).toEqual('medium' );
  });

  it('should return "strong" if password contains letters, numbers, and symbols', () => {
    const password = 'abc123!@#';
    const result = PasswordStrengthService.getPasswordStrength(password);
    expect(result).toEqual('strong' );
  });

  it('should handle Cyrillic letters', () => {
    const password1 = 'абвгдеєжз';
    const result = PasswordStrengthService.getPasswordStrength(password1);
    expect(result).toEqual('easy' );

    const password2 = 'абвг1234';
    const result2 = PasswordStrengthService.getPasswordStrength(password2);
    expect(result2).toEqual('medium' );

    const password3 = 'абвг1234!@#';
    const result3 = PasswordStrengthService.getPasswordStrength(password3);
    expect(result3).toEqual('strong' );
  });
});
