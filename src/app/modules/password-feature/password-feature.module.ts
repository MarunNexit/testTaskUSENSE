import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {PasswordInputComponent} from "./password-input/password-input.component";
import {PasswordStrengthBarComponent} from "./password-strength-bar/password-strength-bar.component";
import {MatFormField, MatFormFieldModule} from "@angular/material/form-field";
import {MatInput} from "@angular/material/input";
import {ReactiveFormsModule} from "@angular/forms";
import {MatIcon} from "@angular/material/icon";
import {MatButton, MatIconButton} from "@angular/material/button";
import {PasswordStrengthMessageComponent} from "./password-strength-message/password-strength-message.component";


@NgModule({
  declarations: [
    PasswordInputComponent,
    PasswordStrengthBarComponent,
    PasswordStrengthMessageComponent
  ],
  imports: [
    CommonModule,
    MatFormField,
    MatInput,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatIcon,
    MatIconButton,
    MatButton,
  ],
  exports: [
    PasswordInputComponent,
    PasswordStrengthBarComponent,
    PasswordStrengthMessageComponent
  ]
})
export class PasswordFeatureModule { }
