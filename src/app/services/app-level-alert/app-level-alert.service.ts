import { Injectable } from '@angular/core';
import { Subject, Observable } from 'rxjs';
import { AlertOptions, AlertType, AlertState } from './app-level-alert.types';
import { StatusTypes } from '@cds/core/internal';
import { v4 as uuidv4 } from 'uuid';

@Injectable({
  providedIn: 'root',
})
export class AppLevelAlertService {
  readonly DEFAULT_OPTIONS: AlertOptions = {
    type: 'neutral',
    message: '',
    icon: 'info-standard',
    closable: true,
    closeButtonLabel: 'Close',
  };

  private optionsSubject$: Subject<AlertState> = new Subject<AlertState>();
  options$: Observable<AlertState> = this.optionsSubject$.asObservable();
  private alerts: AlertOptions[] = [];

  constructor() {}

  show(options: Partial<AlertOptions> = {}): string {
    const id = uuidv4();

    if (!('icon' in options)) {
      options.icon = this.getIconForType(options.alertType || 'info');
    }

    if (!('type' in options)) {
      options.type = this.getStatusType(options.alertType || 'info');
    }

    const newAlert: AlertOptions = {
      ...this.DEFAULT_OPTIONS,
      ...options,
      id,
      open: true,
    };

    this.alerts.push(newAlert);
    this.optionsSubject$.next({ alerts: [...this.alerts] });
    return id;
  }

  hide(id?: string): void {
    if (id) {
      this.alerts = this.alerts.filter((alert) => alert.id !== id);
    } else {
      this.alerts = [];
    }
    this.optionsSubject$.next({ alerts: [...this.alerts] });
  }

  private getIconForType(alertType: AlertType): string {
    const iconsMap: Record<AlertType, string> = {
      info: 'info-standard',
      success: 'success-standard',
      warning: 'warning-standard',
      danger: 'error-standard',
    };
    return iconsMap[alertType];
  }

  private getStatusType(alertType: AlertType): StatusTypes {
    const typeMap: Record<AlertType, StatusTypes> = {
      info: 'info',
      success: 'success',
      warning: 'warning',
      danger: 'danger',
    };
    return typeMap[alertType];
  }
}
