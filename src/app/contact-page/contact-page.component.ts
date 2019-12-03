import {Component, Injectable, OnInit} from '@angular/core';
import {ContactService} from './contact.service';
import {FormBuilder, FormControl, FormGroup, NgForm, Validators} from '@angular/forms';
import {AngularFirestore} from '@angular/fire/firestore';

@Component({
  selector: 'app-contact-page',
  templateUrl: './contact-page.component.html',
  styleUrls: ['./contact-page.component.css']
})

export class ContactPageComponent implements OnInit {

  contactForm: FormGroup;

  constructor(public contactService: ContactService,
              private formBuilder: FormBuilder) {
    this.createForm();
  }

  ngOnInit() {
  }

  createForm() {
    this.contactForm = this.formBuilder.group({
      name: ['', Validators.required],
      email: ['', Validators.required],
      type: ['', Validators.required],
      content: ['', Validators.required]
    });
  }

  clear() {
    this.contactForm = this.formBuilder.group({
      name: ['', Validators.required],
      email: ['', Validators.required],
      type: ['', Validators.required],
      content: ['', Validators.required]
    });
  }

  onSubmit(value) {
    this.contactService.createContact(value).then(r => {this.clear();});
  }
}
