import { Component } from '@angular/core';
import {
  Router,
  RouterLink,
  RouterLinkActive,
  RouterOutlet,
} from '@angular/router';
import { ClrVerticalNavModule } from '@clr/angular';
import { AlertComponent } from '../../../components/alert/alert.component';
import { AppLevelAlertComponent } from '../../../components/app-level-alert/app-level-alert.component';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-user-pages',
  standalone: true,
  imports: [
    RouterOutlet,
    RouterLink,
    ClrVerticalNavModule,
    RouterLink,
    RouterLinkActive,
    AlertComponent,
    AppLevelAlertComponent,
    NgIf,
  ],
  templateUrl: './user-pages.component.html',
  styleUrl: './user-pages.component.scss',
})
export class UserPagesComponent {
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
