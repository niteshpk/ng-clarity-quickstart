import { NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { ClrDropdownModule, ClrFormsModule } from '@clr/angular';

@Component({
  selector: 'app-signup-page',
  standalone: true,
  imports: [ClrFormsModule, ClrDropdownModule, FormsModule, RouterLink, NgIf],
  templateUrl: './Signup-page.component.html',
  styleUrl: './Signup-page.component.scss',
})
export class SignupPageComponent {
  form = {
    // type: 'local',
    username: '',
    password: '',
    confirmPassword: '',
    rememberMe: false,
  };

  isError = false;
}
