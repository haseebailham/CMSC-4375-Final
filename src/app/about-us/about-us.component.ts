import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-about-us',
  templateUrl: './about-us.component.html',
  styleUrls: ['./about-us.component.css']
})
export class AboutUsComponent {
  private aboutUs1 = "We at Cuizines For U love food, and we know others love food, too."
  private aboutUs2 = "Cuizines For U is a site meant for people who are passionate about food, and for people who think that life is better when we share with each other."
  private aboutUs3 = "Our website allows users to upload recipes and view recipes that other people in our virtual community have shared. Our hope is that people will discover new foods to enjoy with their loved ones and connect with other people that share their passion of cooking."
  private faq = "To find out more about our website, visit our FAQ page";
}
