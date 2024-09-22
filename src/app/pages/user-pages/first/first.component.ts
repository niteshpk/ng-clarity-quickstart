import { CommonModule } from '@angular/common';
import { Component, ViewChild } from '@angular/core';
import { ClrModal, ClrModalModule } from '@clr/angular';

@Component({
  selector: 'app-first',
  standalone: true,
  imports: [CommonModule, ClrModalModule],
  templateUrl: './first.component.html',
  styleUrl: './first.component.scss',
})
export class FirstComponent {
  @ViewChild('modal', { static: true }) modal: ClrModal | undefined;

  opened = false;

  openModal() {
    this.modal?.open();
  }
}
