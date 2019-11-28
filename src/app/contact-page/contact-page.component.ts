import {Component, Injectable, OnInit} from '@angular/core';
import {Contact} from './contact';
import {ContactService} from './contact.service';
import {FormBuilder, FormControl, FormGroup, NgForm, Validators} from '@angular/forms';

@Component({
  selector: 'app-contact-page',
  templateUrl: './contact-page.component.html',
  styleUrls: ['./contact-page.component.css']
})

export class ContactPageComponent implements OnInit {

  contactForm: FormGroup;

  constructor(public service: ContactService,
              private formBuilder: FormBuilder) {}

  type = ['Question', 'Feedback'];

  ngOnInit() {
    this.createForm();
  }

  createForm() {
    this.contactForm = this.formBuilder.group({
      name: ['', Validators.required],
      email: ['', Validators.required],
      type: this.type[0],
      content: ['', Validators.required]
    });
  }

  resetFields() {
    this.contactForm = this.formBuilder.group({
      name: ['', Validators.required],
      email: ['', Validators.required],
      type: this.type[0],
      content: ['', Validators.required]
    });
  }

  onSubmit(value) {
    if (value.type === ['Question']) {
      this.service.createQuestion(value)
        .then(
          res => {
            // reset the fields.
            this.resetFields();
          });
    } else {
        this.service.createFeedback(value)
          .then(
            res => {
              // reset the fields.
              this.resetFields();
            }
          );
      }
    }
  }

