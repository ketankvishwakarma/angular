import { OnInit, Component, Input } from '@angular/core';

@Component({
    selector: 'app-user-item',
    template: `
        <li>{{name}}</li>
    `
})
export class UsersItemComponent implements OnInit {

    @Input() name: string;

    constructor() {
        // this.name = 'Ketan';
    }
    ngOnInit() {
        console.log('init UsersItemComponent');
    }
}
