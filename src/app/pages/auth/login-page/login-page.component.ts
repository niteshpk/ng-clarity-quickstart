import { NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { ClrDropdownModule, ClrFormsModule } from '@clr/angular';

@Component({
  selector: 'app-login-page',
  standalone: true,
  imports: [ClrFormsModule, ClrDropdownModule, FormsModule, RouterLink, NgIf],
  templateUrl: './login-page.component.html',
  styleUrl: './login-page.component.scss',
})
export class LoginPageComponent {
  form = {
    // type: 'local',
    username: '',
    password: '',
    rememberMe: false,
  };

  isError = false;
}
