import { Component, Input } from '@angular/core';

@Component({
    selector: 'app-kpi-card',
    standalone: true,
    templateUrl: './kpi-card.component.html',
    styleUrl: './kpi-card.component.scss',
})
export class KpiCardComponent {
    @Input() icon = 'analytics';
    @Input() value = '';
    @Input() label = '';
    @Input() trend = '';
    @Input() variant: 'blue' | 'green' | 'orange' | 'red' = 'blue';
}