import { Component } from '@angular/core';
import { Router, RouterLink, RouterLinkActive } from '@angular/router';
import { NgIf } from '@angular/common';
import { ClrIconModule } from '@clr/angular';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterLink, RouterLinkActive, NgIf, ClrIconModule],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  isLoggingOut = false;

  constructor(private router: Router) {}

  logout() {
    this.isLoggingOut = true;
    setTimeout(() => {
      this.isLoggingOut = false;
      this.router.navigateByUrl('/auth/login');
    }, 1000);
  }
}
