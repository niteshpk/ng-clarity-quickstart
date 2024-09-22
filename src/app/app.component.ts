import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ClarityIcons, userIcon, boltIcon, logoutIcon } from '@cds/core/icon';
import '@cds/core/icon/register.js';
import { CommonModule } from '@angular/common';

const icons = [userIcon, boltIcon, logoutIcon];

ClarityIcons.addIcons(...icons);

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'ng-clarity-quickstart';
}
