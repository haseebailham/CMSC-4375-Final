import {Component, OnInit} from '@angular/core';
import {AuthService} from '../auth.service';
import {NgForm} from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  authError: any;

  constructor(private auth: AuthService) {
  }

  ngOnInit() {
    this.auth.eventAuthError$.subscribe(data => this.authError = data);
  }

  createUser(frm) {
    this.auth.createUser(frm.value);
  }

}
