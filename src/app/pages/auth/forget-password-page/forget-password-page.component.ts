import { NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { ClrDropdownModule, ClrFormsModule } from '@clr/angular';

@Component({
  selector: 'app-forget-password-page',
  standalone: true,
  imports: [ClrFormsModule, ClrDropdownModule, FormsModule, RouterLink, NgIf],
  templateUrl: './forget-password-page.component.html',
  styleUrl: './forget-password-page.component.scss',
})
export class ForgetPasswordPageComponent {
  form = {
    username: '',
  };

  isError = false;
}
