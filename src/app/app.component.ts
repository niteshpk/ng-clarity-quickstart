import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ClarityModule } from '@clr/angular';
import {
  ClarityIcons,
  userIcon,
  boltIcon,
  sadFaceIcon,
  bugIcon,
  shieldIcon,
  certificateIcon,
} from '@cds/core/icon';
import '@cds/core/icon/register.js';
import { CommonModule } from '@angular/common';

const icons = [
  userIcon,
  boltIcon,
  sadFaceIcon,
  bugIcon,
  shieldIcon,
  certificateIcon,
];

ClarityIcons.addIcons(...icons);

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ClarityModule, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'ng-clarity-quickstart';
}
