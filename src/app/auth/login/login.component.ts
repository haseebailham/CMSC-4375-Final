import {Component, OnInit} from '@angular/core';
import {AuthService} from '../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  authError: any;

  constructor(private auth: AuthService) {
  }

// error handling
  ngOnInit() {
    this.auth.eventAuthError$.subscribe(data => {
      this.authError = data;
    });
  }

// login grab email and password from the form then auth in the db for the auth.service.ts
  login(frm) {
    this.auth.login(frm.value.email, frm.value.password);
  }

}
