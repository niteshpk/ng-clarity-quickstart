import { Component, ChangeDetectionStrategy } from '@angular/core';
import { Observable } from 'rxjs';
import { AppLevelAlertService } from '../../services/app-level-alert/app-level-alert.service';
import { AlertState } from '../../services/app-level-alert/app-level-alert.types';
import { ClarityModule } from '@clr/angular';
import { AsyncPipe, NgFor, NgIf } from '@angular/common';

@Component({
  selector: 'app-level-alert',
  standalone: true,
  imports: [ClarityModule, AsyncPipe, NgFor, NgIf],
  templateUrl: './app-level-alert.component.html',
  styleUrl: './app-level-alert.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppLevelAlertComponent {
  options$: Observable<AlertState>;

  constructor(private alertService: AppLevelAlertService) {
    this.options$ = this.alertService.options$;
  }

  handleClose(id: string) {
    this.alertService.hide(id);
  }
}
