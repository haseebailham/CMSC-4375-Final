import {Component, Injectable, OnInit} from '@angular/core';
import { Contact } from './contact';
import { FirebaseService } from '../services/firebase.service';
import {FormBuilder, FormControl, FormGroup, NgForm} from '@angular/forms';

@Component({
  selector: 'app-contact-page',
  templateUrl: './contact-page.component.html',
  styleUrls: ['./contact-page.component.css']
})

export class ContactPageComponent {

  contactForm: FormGroup;

  constructor(public firebaseService: FirebaseService,
              private fb: FormBuilder
             ) {}

  type = ['Question', 'Feedback'];

  model = new Contact(1, 'Name', 'Email', this.type[0], 'Start typing here...');

  submitted = false;

  resetFields() {
    this.contactForm = this.fb.group({
      name: [''],
      email: [''],
      type: this.type[0],
      content: ['Start typing here...']
    });
  }

  onSubmit(form: NgForm) {
    if (form.value.type.equals('Question')) {
      this.firebaseService.createQuestion(form)
        .then(
          res => {
            // reset the fields.
            this.resetFields();
          }
        );
    } else {
      this.firebaseService.createFeedback(form)
        .then(
          res => {
            // reset the fields.
            this.resetFields();
          }
        );
    }
  }
}
