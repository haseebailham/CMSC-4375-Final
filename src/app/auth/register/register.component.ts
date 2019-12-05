import {Component, OnInit} from '@angular/core';
import {AuthService} from '../auth.service';
import {NgForm} from '@angular/forms';
import {CookbookService} from '../../cookbook/cookbook-service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  authError: any;

  constructor(private auth: AuthService, private cookbook: CookbookService) {
  }

  ngOnInit() {
    this.auth.eventAuthError$.subscribe(data => {
      this.authError = data;
    });

  }

  createUser(frm) {
    this.auth.createUser(frm.value);
    this.cookbook.createCookbook();
  }

}
