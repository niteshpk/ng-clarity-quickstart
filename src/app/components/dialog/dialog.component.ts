import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Observable } from 'rxjs';
import { DialogService } from '../../services/dialog/dialog.service';
import { ConfirmOptions } from '../../services/dialog/dialog.types';
import { ClrModalModule } from '@clr/angular';
import { AsyncPipe, NgClass, NgIf } from '@angular/common';

@Component({
  selector: 'app-dialog',
  standalone: true,
  imports: [NgClass, NgIf, AsyncPipe, ClrModalModule],
  templateUrl: './dialog.component.html',
  styleUrl: './dialog.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DialogComponent {
  options$: Observable<ConfirmOptions>;

  constructor(private dialogService: DialogService) {
    this.options$ = this.dialogService.options$;
  }

  getAcceptClass(acceptType: string = 'btn-primary'): string {
    const classMap: any = {
      primary: 'btn-primary',
      success: 'btn-success',
      warning: 'btn-warning',
      danger: 'btn-danger',
    };
    return classMap[acceptType];
  }

  close(value: boolean) {
    this.dialogService.close(value);
  }
}
