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
              private formBuilder: FormBuilder) {
    this.createForm();
  }

  type = ['Question', 'Feedback'];

  model = new Contact('Name', 'Email', 'Type', 'Start typing here...');

  createForm() {
    this.contactForm = this.formBuilder.group({
      name: [''],
      email: [''],
      type: this.type[0],
      content: ['']
    });
  }

  resetFields() {
    this.contactForm = this.formBuilder.group({
      name: new FormControl(),
      email: new FormControl(),
      type: new FormControl(),
      content: new FormControl()
    });
  }

  onSubmit(value) {
    if (value.type === ['Question']) {
      this.firebaseService.createQuestion(value)
        .then(
          res => {
            this.resetFields();
          }
        );
    } else {
      this.firebaseService.createFeedback(value)
        .then(
          res => {
            this.resetFields();
          }
        );
    }
  }
}

