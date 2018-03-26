import { Component } from '@angular/core';

@Component({
    selector: 'user',
    template: `
      <h1>Hello {{name}}</h1>
      <p><strong>Email: </strong> {{email}}</p>
      <p><strong>Address: </strong>{{address.street}} {{address.city}}</p>     
      <button (click)="toggelHobbies()">{{showHobbies ? "Hide Hobbies" : "Show Hobbies"}}</button>
      <div *ngIf="showHobbies"> 
      <p><strong>Hobbies</strong></p>
          <ul>
              <li *ngFor="let hobby of hobbies; let i = index">
                  {{hobby}} <button (click) ="removeHobby(i)">X</button>
              </li>
          </ul>
          <form (submit) = "addHobby(hobby.value)">
              <label>Add: </label> <input type="text" #hobby /><br/>
          </form>
      </div>
     <br/>
      <hr/>
      <form>
          <label>Name: </label> <input type="text" name ="name" [(ngModel)]="name" /><br/>
          <label>Email: </label> <input type="text" name ="email" [(ngModel)]="email"/> <br/>
          <label>Street: </label> <input type="text" name ="address.street" [(ngModel)]="address.street" /><br/>
          <label>Name: </label> <input type="text" name ="address.city" [(ngModel)]="address.city" /><br/>          
      </form>
  `,
})
export class UserComponent {
    name: string;
    email: string;
    address: Address;
    hobbies: string[];
    showHobbies: boolean;

    constructor() {
        console.log('userComponent ran');
        this.name = 'Ketan';
        this.email = 'ketankvishwakarma@gmail.com';
        this.address = {
            street: '133 J & K Block',
            city: 'New Delhi'
        };
        this.hobbies = ['Music', 'Cricket', 'Sports'];
        this.showHobbies = false;
    }

    toggelHobbies() {
        this.showHobbies = !this.showHobbies;
    }

    addHobby(hobby) {
        this.hobbies.push(hobby);
    }

    removeHobby(i) {
        console.log(i);
        this.hobbies.splice(i, 1);
    }
}

interface Address {
    street: string;
    city: string;
}
