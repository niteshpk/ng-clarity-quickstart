import { CommonModule } from '@angular/common';
import { Component, ViewChild } from '@angular/core';
import { ClrModal, ClrModalModule } from '@clr/angular';
import { AlertComponent } from '../../../components/alert/alert.component';
import { DialogService } from '../../../services/dialog/dialog.service';

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

  constructor(private dialog: DialogService) {}

  onConfirm() {
    this.dialog
      .confirm({
        title: 'Send Email',
        content: 'Are you sure to send the confirmation email?',
      })
      .subscribe((result) => console.log('Confirm:', result));
  }

  onCustomConfirm() {
    this.dialog.confirm({
      title: 'Delete item',
      content:
        'Are you sure you want to delete this <b>item</b>? The operation cannot be reverted',
      acceptText: 'Delete',
      acceptType: 'warning',
    });
  }

  onInfo() {
    this.dialog.info({
      title: 'Info',
      content: 'Info content',
    });
  }

  onSuccess() {
    this.dialog.success({
      title: 'Success',
      content: 'Success content',
    });
  }

  onWarning() {
    this.dialog.warning({
      title: 'Warning',
      content: 'Warning content',
    });
  }

  onError() {
    this.dialog.error({
      title: 'Error',
      content: 'Error content',
    });
  }

  handleClose($event: boolean) {
    console.log($event);
  }
}
