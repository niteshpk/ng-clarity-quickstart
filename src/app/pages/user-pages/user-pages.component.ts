import { Component } from '@angular/core';
import {
  Router,
  RouterLink,
  RouterLinkActive,
  RouterOutlet,
} from '@angular/router';
import { ClrModalModule, ClrVerticalNavModule } from '@clr/angular';
import { AppLevelAlertComponent } from '../../components/app-level-alert/app-level-alert.component';
import { DialogComponent } from '../../components/dialog/dialog.component';
import { HeaderComponent } from '../../components/header/header.component';

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
  constructor(private router: Router) {}

  handleClose($event: boolean) {
    console.log($event);
  }
}
