import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AngularFireModule, AuthProviders, AuthMethods } from 'angularfire2';

import { AppComponent } from './app.component';
import { CustomerComponent } from './customer/customer.component';
import { UserComponent } from './user/user.component';
import { CompanyComponent } from './company/company.component';

// Material 2 
import 'hammerjs';
import { MdCoreModule } from '@angular2-material/core';
import { MdButtonModule } from '@angular2-material/button';
import { MdCardModule } from '@angular2-material/card';
import { MdRadioModule } from '@angular2-material/radio';
import { MdCheckboxModule } from '@angular2-material/checkbox';
import { MdListModule } from '@angular2-material/list';
import { MdInputModule } from '@angular2-material/input';

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
        CustomerComponent,
        UserComponent,
        CompanyComponent,
    ],
    imports: [
        BrowserModule,
        FormsModule,
        HttpModule,
        MdCoreModule.forRoot(),
        MdCardModule.forRoot(),
        MdButtonModule.forRoot(),
        MdRadioModule.forRoot(),
        MdCheckboxModule.forRoot(),
        MdListModule.forRoot(),
        MdInputModule.forRoot(),
        AngularFireModule.initializeApp(firebaseConfig, firebaseAuthConfig),
        RouterModule.forRoot([
            {
                path: '',
                redirectTo: '/home',
                pathMatch: 'full'
            },
            {
                path: 'home',
                component: CustomerComponent
            },
            {
                path: 'users',
                component: UserComponent
            },
            {
                path: 'companies',
                component: CompanyComponent
            }
        ])
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }
