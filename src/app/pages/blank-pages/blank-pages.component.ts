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

@Component({
  selector: 'app-user-pages',
  standalone: true,
  imports: [
    RouterOutlet,
    RouterLink,
    RouterLink,
    RouterLinkActive,
    NgIf,
    ClrVerticalNavModule,
    ClrModalModule,
    AlertComponent,
    AppLevelAlertComponent,
    DialogComponent,
  ],
  templateUrl: './blank-pages.component.html',
  styleUrl: './blank-pages.component.scss',
})
export class BlankPagesComponent {
  isLoggingOut = false;

  constructor(private router: Router) {}
}
