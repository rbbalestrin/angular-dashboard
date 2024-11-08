import { Component, input, output, signal } from '@angular/core';
import { Ticket } from '../support-tickets/ticket.model';

@Component({
  selector: 'app-ticket',
  standalone: true,
  imports: [],
  templateUrl: './ticket.component.html',
  styleUrl: './ticket.component.css',
})
export class TicketComponent {
  ticket = input.required<Ticket>({});
  detailsVisible = signal(false);
  close = output();

  onToggleDetails() {
    this.detailsVisible.set(!this.detailsVisible());
  }

  onMarkCompleted() {
    this.close.emit();
    this.onToggleDetails();
  }
}
