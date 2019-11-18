import {Component, Injectable, OnInit} from '@angular/core';
import { Contact } from './contact';
import { FirebaseService } from '../services/firebase.service';
import {FormBuilder, FormControl, FormGroup, NgForm} from '@angular/forms';
import {ContactService} from '../services/contact.service';

@Component({
  selector: 'app-contact-page',
  templateUrl: './contact-page.component.html',
  styleUrls: ['./contact-page.component.css']
})

export class ContactPageComponent {

  contactForm: FormGroup;

  constructor(private contactService: ContactService) {}

  type = ['Question', 'Feedback'];

  model = new Contact('Name', 'Email', this.type[0], 'Start typing here...');

  submitted = false;

  onSubmit(contactForm) {
    const data = new Contact(contactForm.name, contactForm.email, contactForm.type, contactForm.content);

    this.contactService.submitQuestion(data)
      .then(res => {
        this.contactForm.reset();
      });
  }
}

