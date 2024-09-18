import { Component, EventEmitter, Input, Output } from '@angular/core';
import { infoStandardIcon } from '@cds/core/icon';
import { StatusTypes } from '@cds/core/internal';
import { ClarityModule } from '@clr/angular';

@Component({
  selector: 'app-app-level-alert',
  standalone: true,
  imports: [ClarityModule],
  templateUrl: './app-level-alert.component.html',
  styleUrl: './app-level-alert.component.scss',
})
export class AppLevelAlertComponent {
  @Input() type: StatusTypes = 'neutral';

  @Input() closable = true;

  @Input() icon = 'info-standard';

  @Input() closeButtonLabel = 'Close';

  @Input() message: string = '';

  @Output() onClose = new EventEmitter<PointerEvent>();

  handleClose($event: PointerEvent) {
    this.onClose.emit($event);
  }
}
