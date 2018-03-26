import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-my-hello-world',
    template: `
        <p>Hello from user-Component</p>
    `
})
export class MyHelloWorldComponent implements OnInit {

    constructor() {
        console.log('MyHelloworldComponent called');
    }

    ngOnInit() { }
}
