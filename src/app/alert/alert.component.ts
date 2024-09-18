import { Component, EventEmitter, Input, Output } from '@angular/core';
import { StatusTypes } from '@cds/core/internal';
import { ClarityModule } from '@clr/angular';

@Component({
  selector: 'app-alert',
  standalone: true,
  imports: [ClarityModule],
  templateUrl: './alert.component.html',
  styleUrl: './alert.component.scss',
})
export class AlertComponent {
  @Input() type: StatusTypes = 'neutral';

  @Input() message: string = '';

  @Output() onClose = new EventEmitter<PointerEvent>();

  handleClose($event: PointerEvent) {
    this.onClose.emit($event);
  }
}
