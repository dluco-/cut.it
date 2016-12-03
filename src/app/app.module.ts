import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AngularFireModule, AuthProviders, AuthMethods } from 'angularfire2';

import { AppComponent } from './app.component';
import { CustomerComponent } from './customer/customer.component';

// Must export the config
const firebaseConfig = {
  apiKey: 'AIzaSyCldq7MdtidOj08PmSIASm03805o2HLhAE',
  authDomain: 'cutit-e32e8.firebaseapp.com',
  databaseURL: 'https://cutit-e32e8.firebaseio.com',
  storageBucket: 'cutit-e32e8.appspot.com',
  messagingSenderId: '260838937829'
};

const firebaseAuthConfig = {
  provider: AuthProviders.Google,
  method: AuthMethods.Redirect
};

@NgModule({
  declarations: [
    AppComponent,
    CustomerComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AngularFireModule.initializeApp(firebaseConfig, firebaseAuthConfig),
    RouterModule.forRoot([
      {
        path: 'home',
        component: CustomerComponent
      }
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }



