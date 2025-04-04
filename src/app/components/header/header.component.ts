import { Component } from '@angular/core';
import { Router, RouterLink, RouterLinkActive } from '@angular/router';
import { NgIf } from '@angular/common';
import { ClrIconModule } from '@clr/angular';
import { AppLevelAlertService } from '../../services/app-level-alert/app-level-alert.service';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterLink, RouterLinkActive, NgIf, ClrIconModule],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  isLoggingOut = false;

  constructor(
    private router: Router,
    private appAlertService: AppLevelAlertService
  ) {}

  logout() {
    this.isLoggingOut = true;
    this.appAlertService.show({
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
