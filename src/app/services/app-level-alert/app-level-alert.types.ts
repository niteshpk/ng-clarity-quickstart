import { StatusTypes } from '@cds/core/internal';

export type AlertType = 'info' | 'success' | 'warning' | 'danger';

export type StatusType = StatusTypes;

export interface AlertOptions {
  id?: string;
  type?: StatusTypes;
  message: string;
  icon?: string;
  closable?: boolean;
  closeButtonLabel?: string;
  open?: boolean;
  alertType?: AlertType;
}

export interface AlertState {
  alerts: AlertOptions[];
}
