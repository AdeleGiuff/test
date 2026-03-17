import { CommonModule, CurrencyPipe, DatePipe } from '@angular/common';
import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MOCK_INVOICES } from '../../core/data/mock-invoices';
import { Invoice } from '../../core/models/invoice.model';
import { KpiCardComponent } from '../../shared/components/kpi-card/kpi-card.component';
import { StatusBadgeComponent } from '../../shared/components/status-badge/status-badge.component';

@Component({
    selector: 'app-invoice-page',
    standalone: true,
    imports: [
        CommonModule,
        FormsModule,
        CurrencyPipe,
        DatePipe,
        KpiCardComponent,
        StatusBadgeComponent,
    ],
    templateUrl: './invoice-page.component.html',
    styleUrl: './invoice-page.component.scss',
})
export class InvoicePageComponent implements AfterViewInit {
    invoices: Invoice[] = MOCK_INVOICES;
    filteredInvoices: Invoice[] = [...MOCK_INVOICES];
    selectedInvoice: Invoice | null = MOCK_INVOICES[2] ?? null;
    searchTerm = '';

    @ViewChild('detailPanel') detailPanel!: ElementRef<HTMLElement>;

    ngAfterViewInit(): void { }

    selectInvoice(invoice: Invoice): void {
        this.selectedInvoice = invoice;
        // alla selezione della riga compare il detail panel con scrollo automatico
        setTimeout(() => {
            this.detailPanel?.nativeElement.scrollIntoView({
                behavior: 'smooth',
                block: 'start',
            });
        });
    }

    onSearch(): void {
        const term = this.searchTerm.trim().toLowerCase();

        this.filteredInvoices = this.invoices.filter((invoice) =>
            invoice.id.toLowerCase().includes(term) ||
            invoice.customer.toLowerCase().includes(term)
        );
        console.log(this.filteredInvoices)

        this.selectedInvoice = this.filteredInvoices.length > 0
            ? this.filteredInvoices[0]
            : null;


    }

    formatEuro(value: number): string {
        return new Intl.NumberFormat('it-IT', {
            style: 'currency',
            currency: 'EUR',
            minimumFractionDigits: 2,
        }).format(value);
    }
}