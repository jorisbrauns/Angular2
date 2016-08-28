import { Component, Input, Output, EventEmitter, HostListener, OnChanges } from '@angular/core';

@Component({
    selector: 'th[order-by]',
    templateUrl: './app/shared/Components/orderby/order-by.component.html',
    styleUrls: ['./app/shared/Components/orderby/order-by.component.css']
})
export class OrderByComponent implements OnChanges {
    private direction: boolean;
    @Input() target: string;
    @Output() orderByUpdate = new EventEmitter();
    @Input() orderByIncoming: any;

    ngOnChanges(changes: any): void {
        var orderByIncoming: any = changes.orderByIncoming.currentValue;
        if (orderByIncoming) {
            console.log(orderByIncoming);
        }
    }

    @HostListener('click', ['$event.target'])
    onClick(btn) {
        this.direction = !this.direction;
        this.orderByUpdate.emit({ target: this.target, direction: this.direction });
    }


}