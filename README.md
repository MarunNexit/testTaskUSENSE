# PasswordStrengthProject

## Project Overview

This project is designed to demonstrate the ability to evaluate and display the strength of a password in real time. The application is created as part of a technical task for the USENSE Company. The primary goal is to develop a user-friendly password strength tester that provides immediate feedback to users on the strength of their passwords.

## Task

Create an application to test password strength.

### The Essence of the Assignment

- **Password Input Field**: Create a field for entering a password.
- **Strength Indicators**: Add three sections below the password field to show the strength of the password.
- **Real-Time Feedback**: Changes in password strength must be displayed in real time as the user types.

### How to Calculate the Strength of a Password

- **Easy**: Only letters, digits, or symbols.
- **Medium**: Combination of letters-symbols, letters-digits, or digits-symbols.
- **Strong**: Contains letters, symbols, and numbers.

### Color Coding

- **Empty Field**: All sections are gray.
- **Less than 8 Characters**: All sections are red.
- **Easy Password**: The first section is red; the other sections are gray.
- **Medium Password**: The first two sections are yellow; the last section is gray.
- **Strong Password**: All sections are green.

## Features

- **Password Input Field**: A field where users can enter their password.
- **Strength Indicators**: Three sections below the password field that visually indicate the strength of the password.
- **Real-Time Feedback**: The strength of the password is assessed and displayed in real time as the user types.

## Implementation Details

- **Form Control**: Uses Angular's reactive forms to manage the password input and validation.
- **Real-Time Validation**: The password strength is calculated and updated in real time as the user types.
- **Styling**: The color of the strength indicators changes based on the calculated strength to provide visual feedback.

## Setup

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 18.1.1.

### Development Server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

### Code Scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

### Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

### Running Unit Tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

### Running End-to-End Tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further Help

To get more help on the Angular CLI use `ng help` or check out the [Angular CLI Overview and Command Reference](https://angular.dev/tools/cli) page.
