import { NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { ClrDropdownModule, ClrFormsModule } from '@clr/angular';

@Component({
  selector: 'app-signup-page',
  standalone: true,
  imports: [ClrFormsModule, ClrDropdownModule, FormsModule, RouterLink, NgIf],
  templateUrl: './signup-page.component.html',
  styleUrl: './signup-page.component.scss',
})
export class SignupPageComponent {
  form = {
    username: '',
    password: '',
    confirmPassword: '',
    rememberMe: false,
  };

  isError = false;
}
