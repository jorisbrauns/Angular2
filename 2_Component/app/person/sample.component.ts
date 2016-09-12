import { Component, Input } from '@angular/core';

@Component({
    selector: 'sample',
    template: '{{subject}}'
})
export class SampleComponent {

   @Input() subject:string;

}