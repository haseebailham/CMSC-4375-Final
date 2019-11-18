import {Component, Injectable, OnInit} from '@angular/core';
import { Contact } from './contact';
import { FirebaseService } from '../services/firebase.service';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-contact-page',
  templateUrl: './contact-page.component.html',
  styleUrls: ['./contact-page.component.css']
})

@Injectable()
export class ContactPageComponent {

  constructor(public firebaseService: FirebaseService,
              private fb: FormBuilder
             ) {}

  type = ['Question', 'Feedback'];

  model = new Contact(1, 'Name', 'Email', this.type[0], 'Start typing here...');

  submitted = false;

  onSubmit() {
    this.submitted = true;
  }
}
