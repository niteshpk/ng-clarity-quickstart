import {
  AlertType,
  StatusType,
} from './../../../services/app-level-alert/app-level-alert.types';
import { CommonModule } from '@angular/common';
import { Component, ViewChild } from '@angular/core';
import { ClrModal, ClrModalModule } from '@clr/angular';
import { AlertComponent } from '../../../components/alert/alert.component';
import { DialogService } from '../../../services/dialog/dialog.service';
import { AppLevelAlertService } from '../../../services/app-level-alert/app-level-alert.service';

@Component({
  selector: 'app-first',
  standalone: true,
  imports: [CommonModule, ClrModalModule, AlertComponent],
  templateUrl: './first-page.component.html',
  styleUrl: './first-page.component.scss',
})
export class FirstPageComponent {
  @ViewChild('modal', { static: true }) modal: ClrModal | undefined;

  opened = false;

  constructor(
    private dialog: DialogService,
    private appAlertService: AppLevelAlertService
  ) {}

  onConfirm() {
    this.dialog
      .confirm({
        title: 'Send Email',
        content: 'Are you sure to send the confirmation email?',
      })
      .subscribe((result) => console.log('Confirm:', result));
  }

  handleClose($event: boolean) {
    console.log($event);
  }

  showAppLevelAlert(type: StatusType, alertType: AlertType, message: string) {
    this.appAlertService.show({
      message: message,
      type: type,
      alertType: alertType,
    });
  }
}
