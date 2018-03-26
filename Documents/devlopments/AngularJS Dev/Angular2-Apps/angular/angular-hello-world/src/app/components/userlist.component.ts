import { Component, OnInit } from '@angular/core';

@Component({
 selector: 'app-user-list',
 template: `
     <ul *ngFor="let individualNames of names">
         <app-user-item [name]="individualNames"></app-user-item>
     </ul>
 `
})
export class UserListComponent implements OnInit {

    names: string[];
    constructor() {
        this.names = ['Ketan', 'Falu', 'Anisha'];
    }
    ngOnInit() {}
}
