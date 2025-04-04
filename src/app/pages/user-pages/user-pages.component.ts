import { Component } from '@angular/core';
import {
  Router,
  RouterLink,
  RouterLinkActive,
  RouterOutlet,
} from '@angular/router';
import { ClrModalModule, ClrVerticalNavModule } from '@clr/angular';
import { NgIf } from '@angular/common';
import { AlertComponent } from '../../components/alert/alert.component';
import { AppLevelAlertComponent } from '../../components/app-level-alert/app-level-alert.component';
import { DialogComponent } from '../../components/dialog/dialog.component';
import { HeaderComponent } from '../../components/header/header.component';
import { AppLevelAlertService } from '../../services/app-level-alert/app-level-alert.service';

@Component({
  selector: 'app-user-pages',
  standalone: true,
  imports: [
    RouterOutlet,
    RouterLink,
    RouterLink,
    RouterLinkActive,
    ClrVerticalNavModule,
    ClrModalModule,
    AppLevelAlertComponent,
    DialogComponent,
    HeaderComponent,
  ],
  templateUrl: './user-pages.component.html',
  styleUrl: './user-pages.component.scss',
})
export class UserPagesComponent {
  isLoggingOut = false;

  constructor(
    private router: Router,
    private alertService: AppLevelAlertService
  ) {}

  handleClose($event: boolean) {
    console.log($event);
  }

  logout() {
    this.isLoggingOut = true;
    this.alertService.show({
      message: 'Logging out...',
      type: 'info',
      alertType: 'info',
    });
    setTimeout(() => {
      this.isLoggingOut = false;
      this.router.navigateByUrl('/auth/login');
    }, 1000);
  }
}
