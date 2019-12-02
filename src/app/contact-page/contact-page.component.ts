import {Component, Injectable, OnInit} from '@angular/core';
import {ContactService} from './contact.service';
import {FormBuilder, FormControl, FormGroup, NgForm, Validators} from '@angular/forms';
import {Contact} from './contact';

@Component({
  selector: 'app-contact-page',
  templateUrl: './contact-page.component.html',
  styleUrls: ['./contact-page.component.css']
})

export class ContactPageComponent implements OnInit {

  contactForm: FormGroup;

  model = new Contact('Name', 'Email', 'Question', 'Start typing here...');

  constructor(public service: ContactService,
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

  onSubmit() {
  }
}
