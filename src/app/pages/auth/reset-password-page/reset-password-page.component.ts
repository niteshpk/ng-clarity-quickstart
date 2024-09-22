import { NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { ClrDropdownModule, ClrFormsModule } from '@clr/angular';

@Component({
  selector: 'app-reset-password-page',
  standalone: true,
  imports: [ClrFormsModule, ClrDropdownModule, FormsModule, RouterLink, NgIf],
  templateUrl: './reset-password-page.component.html',
  styleUrl: './reset-password-page.component.scss',
})
export class ResetPasswordPageComponent {
  form = {
    username: '',
    password: '',
    confirmPassword: '',
  };

  isError = false;
}
