import { Component } from '@angular/core';
import {
  Router,
  RouterLink,
  RouterLinkActive,
  RouterOutlet,
} from '@angular/router';
import { NgIf } from '@angular/common';
import { ClrDropdownModule } from '@clr/angular';

@Component({
  selector: 'app-auth-pages',
  standalone: true,
  imports: [
    RouterOutlet,
    RouterLink,
    RouterLink,
    RouterLinkActive,
    NgIf,
    ClrDropdownModule,
  ],
  templateUrl: './auth-pages.component.html',
  styleUrl: './auth-pages.component.scss',
})
export class AuthPagesComponent {
  isLoggingOut = false;

  constructor(private router: Router) {}

  handleClose($event: boolean) {
    console.log($event);
  }

  logout() {
    this.isLoggingOut = true;
    setTimeout(() => {
      this.isLoggingOut = false;
      this.router.navigateByUrl('/auth/login');
    }, 3000);
  }
}
