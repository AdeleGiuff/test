import { Component } from '@angular/core';

@Component({
    selector: 'app-topbar',
    standalone: true,
    templateUrl: './topbar.component.html',
    styleUrl: './topbar.component.scss',
})
export class TopbarComponent {
    pageTitle = 'Gestione Fatture';
    pageSub = '/ Anno corrente';

    user = {
        initials: 'MR',
        name: 'Marco Rossi',
        role: 'Amministratore',
    };

    quickActions = [
        { icon: 'search', count: null },
        { icon: 'notifications', count: '4' },
        { icon: 'mail', count: '7' },
        { icon: 'calendar_month', count: null },
    ];
}