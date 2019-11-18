import {Component, Injectable, OnInit} from '@angular/core';
import { Contact } from './contact';
import { FirebaseService } from '../services/firebase.service';
import { AngularFirestore} from '@angular/fire/firestore';
import {FormBuilder, FormControl, FormGroup, NgForm} from '@angular/forms';
import {ContactService} from '../services/contact.service';

@Component({
  selector: 'app-contact-page',
  templateUrl: './contact-page.component.html',
  styleUrls: ['./contact-page.component.css']
})

export class ContactPageComponent {

  contactForm: FormGroup;

  constructor(private formBuilder: FormBuilder,
              private angularFire: AngularFirestore) {
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

  onSubmit() {
    const {name, email, type, content} = this.contactForm.value;
    const formRequest = { name, email, type, content };
    if (this.contactForm.value(type) === 'Question') {
      this.angularFire.collection('/questions').add(formRequest)
        .then(r => this.contactForm.reset());
    } else {
      this.angularFire.collection('/feedback').add(formRequest)
        .then(r => this.contactForm.reset());
    }
  }
}

