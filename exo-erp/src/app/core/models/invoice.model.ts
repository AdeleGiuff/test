export type InvoiceStatus = 'paid' | 'pending' | 'overdue' | 'draft';

export interface InvoiceRow {
    code: string;
    description: string;
    unit?: string;
    quantity: number;
    unitPrice: number;
    vatRate: number;
    vatAmount: number;
    total: number;
}

export interface Invoice {
    id: string;
    customer: string;
    vatNumber: string;
    issueDate: string;
    dueDate: string;
    taxableAmount: number;
    vatAmount: number;
    totalAmount: number;
    status: InvoiceStatus;
    note?: string;
    rows: InvoiceRow[];
}