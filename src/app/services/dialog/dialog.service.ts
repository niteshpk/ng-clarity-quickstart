import { Injectable } from '@angular/core';
import { Subject, Observable } from 'rxjs';
import { ConfirmOptions, ConfirmType } from './dialog.types';

@Injectable({
  providedIn: 'root',
})
export class DialogService {
  readonly DEFAULT_OPTIONS: ConfirmOptions = {
    acceptText: 'Ok',
    cancelText: 'Cancel',
    acceptType: 'primary',
  };

  private optionsSubject$: Subject<ConfirmOptions> =
    new Subject<ConfirmOptions>();

  options$: Observable<ConfirmOptions> = this.optionsSubject$.asObservable();

  private resultChange$!: Subject<boolean>;

  constructor() {}

  confirm(options: ConfirmOptions = {}): Observable<boolean> {
    if (!('iconShape' in options)) {
      options.iconShape = 'help';
    }

    if (!('iconClass' in options)) {
      options.iconClass = 'is-highlight is-solid';
    }
    return this.create(options, 'confirm');
  }

  error(options: ConfirmOptions = {}): Observable<boolean> {
    return this.simpleConfirm(options, 'error');
  }

  info(options: ConfirmOptions = {}): Observable<boolean> {
    return this.simpleConfirm(options, 'info');
  }

  success(options: ConfirmOptions = {}): Observable<boolean> {
    return this.simpleConfirm(options, 'success');
  }

  warning(options: ConfirmOptions = {}): Observable<boolean> {
    return this.simpleConfirm(options, 'warning');
  }

  private simpleConfirm(
    options: ConfirmOptions = {},
    confirmType: ConfirmType
  ): Observable<boolean> {
    const iconsMap: any = {
      info: 'info-standard',
      success: 'success-standard',
      error: 'error-standard',
      warning: 'warning-standard',
    };

    const classMap: any = {
      info: 'is-info is-solid',
      success: 'is-success is-solid',
      error: 'is-error is-solid',
      warning: 'is-warning is-solid',
    };

    options.iconShape = iconsMap[confirmType];
    options.iconClass = classMap[confirmType];

    if (!('cancelText' in options)) {
      // options.cancelText = null;
    }
    return this.create(options, confirmType);
  }

  private create(
    options: ConfirmOptions,
    confirmType: ConfirmType = 'confirm'
  ): Observable<boolean> {
    this.optionsSubject$.next({
      ...this.DEFAULT_OPTIONS,
      ...options,
      open: true,
      confirmType,
    });

    this.resultChange$ = new Subject<boolean>();
    return this.resultChange$.asObservable();
  }

  close(accepted: boolean) {
    this.optionsSubject$.next({ open: false } as ConfirmOptions);

    this.resultChange$.next(accepted);
    this.resultChange$.complete();
  }
}
