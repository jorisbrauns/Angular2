import { Component, Input } from '@angular/core';

@Component({
    selector: 'test',
    template: '{{subject}}'
})
export class TestComponent {
   @Input() subject:string;
}