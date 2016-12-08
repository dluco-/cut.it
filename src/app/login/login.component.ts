import { Component, OnInit } from '@angular/core';
import { AngularFire, AuthProviders, AuthMethods } from 'angularfire2';
import { Location } from '@angular/common';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  location: Location;

  constructor(public af: AngularFire, location: Location) {
    // this.af.auth.subscribe(auth => console.log(auth));
  }

  loginGoogle() {
    this.af.auth.login({
      provider: AuthProviders.Google,
      method: AuthMethods.Popup,
    }).then(resp => {
    }).catch(err => console.log(err));
  }

  logout() {
    this.af.auth.logout();
  }

  ngOnInit() {
  }

}
