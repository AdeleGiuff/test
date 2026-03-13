import { Component, Input } from '@angular/core';
import { InvoiceStatus } from '../../../core/models/invoice.model';

@Component({
    selector: 'app-status-badge',
    standalone: true,
    templateUrl: './status-badge.component.html',
    styleUrl: './status-badge.component.scss',
})
export class StatusBadgeComponent {
    @Input({ required: true }) status!: InvoiceStatus;

    get label(): string {
        switch (this.status) {
            case 'paid':
                return 'Pagata';
            case 'pending':
                return 'In Attesa';
            case 'overdue':
                return 'Scaduta';
            case 'draft':
                return 'Bozza';
        }
    }
}