import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

type BadgeVariant = 'blue' | 'orange';
type PresenceStatus = 'online' | 'away' | 'offline';

interface NavItem {
    label: string;
    icon: string;
    badge?: string;
    badgeVariant?: BadgeVariant;
    active?: boolean;
}

@Component({
    selector: 'app-sidebar',
    standalone: true,
    imports: [CommonModule],
    templateUrl: './sidebar.component.html',
    styleUrl: './sidebar.component.scss',
})
export class SidebarComponent {
    primaryItems: NavItem[] = [
        { label: 'Dashboard', icon: 'grid_view' },
        {
            label: 'Fatture',
            icon: 'receipt_long',
            badge: '12',
            badgeVariant: 'orange',
            active: true,
        },
        {
            label: 'Ordini',
            icon: 'shopping_cart',
            badge: '5',
            badgeVariant: 'orange',
        },
        { label: 'Magazzino', icon: 'inventory_2' },
        { label: 'Clienti', icon: 'groups' },
        { label: 'Fornitori', icon: 'storefront' },
    ];

    accountingItems: NavItem[] = [
        { label: 'Prima Nota', icon: 'account_balance' },
        { label: 'Report', icon: 'bar_chart' },
        {
            label: 'Scadenzario',
            icon: 'event_note',
            badge: '3',
            badgeVariant: 'orange',
        },
    ];

    systemItems: NavItem[] = [
        { label: 'Impostazioni', icon: 'settings' },
        { label: 'Supporto', icon: 'help_outline' },
    ];

    user = {
        initials: 'MR',
        name: 'Marco Rossi',
        role: 'Amministratore',
        status: 'online' as PresenceStatus,
    };
}