import {Component, OnInit} from '@angular/core';
import {PersonalityQuizQuestion} from "../personalityQuizQuestion";

@Component({
  selector: 'app-personality-quiz',
  templateUrl: './personality-quiz.component.html',
  styleUrls: ['./personality-quiz.component.css']
})
export class PersonalityQuizComponent {
  showLink = false;
  q1 = "How would you spend a Saturday?";
  q1Options = ["Spa Day", "Throw a party", "Catch up on a TV show"];
  q3 = "Which word best describes you?";
  q3Options = ["Short-tempered", "Serene", "Adventurous"];
  q5 = "Do you believe sharing is caring?";
  q5Options = ["Yes!", "No way!"];
  q2 = "Which color scheme speaks to you?";
  q2Options = ["Pastel", "Primary Colors", "Black and White"];
  q4 = "What design would you prefer for a phone case?";
  q4Options = ["Solid Color", "Clear", "No case"];
  q6 = "What is the best movie genre?";
  q6Options = ["Action", "Romance", "SyFy", "Comedy"];
  q7 = "What character do you like best?";
  q7Options = ["Stitch", "Cinderella", "Baby Yoda", "Iron Man"];
  q8 = "Which CS professor do you think is better?";
  q8Options = ["Speh", "Mirsky"];

  userFoodAnswer = "";
  userResponse = [];

  foodTypeQuestion(clickedOption) {
    this.userResponse.push(clickedOption);
    console.log(this.userResponse);
  }

  tempTypeQuestion(clickedOption) {
    this.userResponse.push(clickedOption);
    console.log(this.userResponse);
  }

  sizeTypeQuestion(clickedOption) {
    this.userResponse.push(clickedOption);
    console.log(this.userResponse);

  }

  lastQuestion() {
    this.findPersonalityFood();
    console.log(this.userFoodAnswer);
    this.showLink = true;
  }

  findPersonalityFood() {
    if (this.userResponse.includes(this.q1Options[0]) && this.userResponse.includes(this.q3Options[0]) && this.userResponse.includes(this.q5Options[1])) {
      this.userFoodAnswer = "Cookies";
    } else if (this.userResponse.includes(this.q1Options[0]) && this.userResponse.includes(this.q3Options[0]) && this.userResponse.includes(this.q5Options[0])) {
      this.userFoodAnswer = "Pie";
    } else if (this.userResponse.includes(this.q1Options[0]) && this.userResponse.includes(this.q3Options[1]) && this.userResponse.includes(this.q5Options[1])) {
      this.userFoodAnswer = "Ice Cream Cone";
    } else if (this.userResponse.includes(this.q1Options[0]) && this.userResponse.includes(this.q3Options[1]) && this.userResponse.includes(this.q5Options[0])) {
      this.userFoodAnswer = "Trifle";
    } else if (this.userResponse.includes(this.q1Options[0]) && this.userResponse.includes(this.q3Options[2]) && this.userResponse.includes(this.q5Options[1])) {
      this.userFoodAnswer = "Lava Cake A La Mode";
    } else if (this.userResponse.includes(this.q1Options[0]) && this.userResponse.includes(this.q3Options[2]) && this.userResponse.includes(this.q5Options[0])) {
      this.userFoodAnswer = "Ice Cream Cake";
    } else if (this.userResponse.includes(this.q1Options[1]) && this.userResponse.includes(this.q3Options[0]) && this.userResponse.includes(this.q5Options[1])) {
      this.userFoodAnswer = "Burger";
    } else if (this.userResponse.includes(this.q1Options[1]) && this.userResponse.includes(this.q3Options[0]) && this.userResponse.includes(this.q5Options[0])) {
      this.userFoodAnswer = "Lasagna";
    } else if (this.userResponse.includes(this.q1Options[1]) && this.userResponse.includes(this.q3Options[1]) && this.userResponse.includes(this.q5Options[1])) {
      this.userFoodAnswer = "Chicken Salad Sandwich";
    } else if (this.userResponse.includes(this.q1Options[1]) && this.userResponse.includes(this.q3Options[1]) && this.userResponse.includes(this.q5Options[0])) {
      this.userFoodAnswer = "Pasta Salad";
    } else if (this.userResponse.includes(this.q1Options[1]) && this.userResponse.includes(this.q3Options[2]) && this.userResponse.includes(this.q5Options[1])) {
      this.userFoodAnswer = "Chicken Lettuce Wrap";
    } else if (this.userResponse.includes(this.q1Options[1]) && this.userResponse.includes(this.q3Options[2]) && this.userResponse.includes(this.q5Options[0])) {
      this.userFoodAnswer = "Taco Salad";
    } else if (this.userResponse.includes(this.q1Options[2]) && this.userResponse.includes(this.q3Options[0]) && this.userResponse.includes(this.q5Options[1])) {
      this.userFoodAnswer = "Jalapeno Popper";
    } else if (this.userResponse.includes(this.q1Options[2]) && this.userResponse.includes(this.q3Options[0]) && this.userResponse.includes(this.q5Options[0])) {
      this.userFoodAnswer = "Vegetable Soup";
    } else if (this.userResponse.includes(this.q1Options[2]) && this.userResponse.includes(this.q3Options[1]) && this.userResponse.includes(this.q5Options[1])) {
      this.userFoodAnswer = "Deviled Eggs";
    } else if (this.userResponse.includes(this.q1Options[2]) && this.userResponse.includes(this.q3Options[1]) && this.userResponse.includes(this.q5Options[0])) {
      this.userFoodAnswer = "Hummus and Pita Chips";
    } else if (this.userResponse.includes(this.q1Options[2]) && this.userResponse.includes(this.q3Options[2]) && this.userResponse.includes(this.q5Options[1])) {
      this.userFoodAnswer = "Hot Wings and Ranch";
    } else if (this.userResponse.includes(this.q1Options[2]) && this.userResponse.includes(this.q3Options[2]) && this.userResponse.includes(this.q5Options[0])) {
      this.userFoodAnswer = "Loaded Nachos";
    }
  }
}
