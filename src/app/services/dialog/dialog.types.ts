export type ConfirmType = 'confirm' | 'info' | 'success' | 'warning' | 'error';
export type AcceptType = 'primary' | 'success' | 'warning' | 'danger';

export interface ConfirmOptions {
  iconShape?: string;
  iconClass?: string;
  open?: boolean;
  title?: string;
  content?: string;
  acceptText?: string;
  acceptType?: AcceptType;
  cancelText?: string;
  confirmType?: ConfirmType;
}
