import {Component, Injectable, OnInit} from '@angular/core';
import {Contact} from './contact';
import {ContactService} from './contact.service';
import {FormBuilder, FormControl, FormGroup, NgForm} from '@angular/forms';

@Component({
  selector: 'app-contact-page',
  templateUrl: './contact-page.component.html',
  styleUrls: ['./contact-page.component.css']
})

export class ContactPageComponent implements OnInit {

  constructor(public service: ContactService,
              private formBuilder: FormBuilder) {}

  contactForm: FormGroup;

  type = ['Question', 'Feedback'];

  model = new Contact('Name', 'Email', 'Type', 'Start typing here...');

  ngOnInit() {
    this.createForm();
  }

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
      name: new FormControl(''),
      email: new FormControl(''),
      type: new FormControl(this.type[0]),
      content: new FormControl('')
    });
  }

  onSubmit(value) {
    if (value.type === ['Question']) {
      this.service.createQuestion(value)
        .then(
          res => {
            this.resetFields();
          }
        );
    } else {
      this.service.createFeedback(value)
        .then(
          res => {
            this.resetFields();
          }
        );
    }
  }
}

