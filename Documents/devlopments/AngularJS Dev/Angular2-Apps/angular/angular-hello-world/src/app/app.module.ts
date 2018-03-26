import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { MyHelloWorldComponent } from './components/myhelloworld.component';
import { UserListComponent } from './components/userlist.component';
import { UsersItemComponent } from './components/usersitem.component';


@NgModule({
  declarations: [
    AppComponent,
    MyHelloWorldComponent,
    UserListComponent,
    UsersItemComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
