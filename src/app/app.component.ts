import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { ClarityModule } from '@clr/angular';
import { ClarityIcons, userIcon, boltIcon } from '@cds/core/icon';
import '@cds/core/icon/register.js';
import { CommonModule } from '@angular/common';
import { AlertComponent } from './alert/alert.component';
import { AppLevelAlertComponent } from './app-level-alert/app-level-alert.component';

const icons = [userIcon, boltIcon];

ClarityIcons.addIcons(...icons);

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    RouterOutlet,
    RouterLink,
    RouterLinkActive,
    ClarityModule,
    AlertComponent,
    AppLevelAlertComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'ng-clarity-quickstart';

  handleClose($event: boolean) {
    console.log($event);
  }
}
