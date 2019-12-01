import {Component, Injectable, OnInit} from '@angular/core';
import {ContactService} from './contact.service';
import {FormBuilder, FormControl, FormGroup, NgForm, Validators} from '@angular/forms';

@Component({
  selector: 'app-contact-page',
  templateUrl: './contact-page.component.html',
  styleUrls: ['./contact-page.component.css']
})

export class ContactPageComponent implements OnInit {

  contactForm: FormGroup;

  constructor(public contactService: ContactService,
              private formBuilder: FormBuilder) {
  }

  type = ['Question', 'Feedback'];

  ngOnInit() {
    this.contactForm = this.formBuilder.group({
      name: [''],
      email: [''],
      type: this.type[0],
      content: ['']
    });
  }

  clear() {
    this.contactForm = this.formBuilder.group({
      name: [''],
      email: [''],
      type: this.type[0],
      content: ['']
    });
  }

  onSubmit(value) {
    this.contactService.createContact(this.contactForm).then(r => {this.clear();});
  }
}
