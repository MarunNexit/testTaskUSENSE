import {Component, OnInit} from '@angular/core';
import {
  AbstractControl,
  FormBuilder,
  FormGroup,
  ValidationErrors,
  Validators
} from "@angular/forms";
import {PasswordStrengthService} from "../../../services/password-strength.service";

@Component({
  selector: 'app-password-input',
  templateUrl: './password-input.component.html',
  styleUrl: './password-input.component.scss'
})
export class PasswordInputComponent implements OnInit{
  passwordForm!: FormGroup;
  strength: string = 'empty';
  passwordVisible: boolean = false;

  constructor(private fb: FormBuilder) {}

  ngOnInit() {
    this.initializeForm();
  }

  private initializeForm() {
    this.passwordForm = this.fb.group({
      password: ['', [Validators.required, this.validatePassword.bind(this)]]
    });
  }

  private validatePassword(control: AbstractControl): ValidationErrors | null {
    const password = control.value;
    const strength = PasswordStrengthService.getPasswordStrength(password);
      this.strength = strength ? strength : 'empty';
    return strength === 'strong' ? null : { 'strength': strength };
  }
}
