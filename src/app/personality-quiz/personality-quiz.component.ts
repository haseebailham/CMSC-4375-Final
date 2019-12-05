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
  answerDescription = "";

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
    if (this.userResponse[0] == this.q1Options[0] && this.userResponse[1] == this.q3Options[0] && this.userResponse[2] == this.q5Options[1]) {
      this.userFoodAnswer = "Cookies";
    } else if (this.userResponse[0] == this.q1Options[0] && this.userResponse[1] == this.q3Options[0] && this.userResponse[2] == this.q5Options[0]) {
      this.userFoodAnswer = "Pie";
    } else if (this.userResponse[0] == this.q1Options[0] && this.userResponse[1] == this.q3Options[1] && this.userResponse[2] == this.q5Options[1]) {
      this.userFoodAnswer = "Ice Cream Cone";
    } else if (this.userResponse[0] == this.q1Options[0] && this.userResponse[1] == this.q3Options[1] && this.userResponse[2] == this.q5Options[0]) {
      this.userFoodAnswer = "Trifle";
    } else if (this.userResponse[0] == this.q1Options[0] && this.userResponse[1] == this.q3Options[2] && this.userResponse[2] == this.q5Options[1]) {
      this.userFoodAnswer = "Lava Cake A La Mode";
    } else if (this.userResponse[0] == this.q1Options[0] && this.userResponse[1] == this.q3Options[2] && this.userResponse[2] == this.q5Options[0]) {
      this.userFoodAnswer = "Ice Cream Cake";
    } else if (this.userResponse[0] == this.q1Options[1] && this.userResponse[1] == this.q3Options[0] && this.userResponse[2] == this.q5Options[1]) {
      this.userFoodAnswer = "Burger";
    } else if (this.userResponse[0] == this.q1Options[1] && this.userResponse[1] == this.q3Options[0] && this.userResponse[2] == this.q5Options[0]) {
      this.userFoodAnswer = "Lasagna";
    } else if (this.userResponse[0] == this.q1Options[1] && this.userResponse[1] == this.q3Options[1] && this.userResponse[2] == this.q5Options[1]) {
      this.userFoodAnswer = "Chicken Salad Sandwich";
    } else if (this.userResponse[0] == this.q1Options[1] && this.userResponse[1] == this.q3Options[1] && this.userResponse[2] == this.q5Options[0]) {
      this.userFoodAnswer = "Pasta Salad";
    } else if (this.userResponse[0] == this.q1Options[1] && this.userResponse[1] == this.q3Options[2] && this.userResponse[2] == this.q5Options[1]) {
      this.userFoodAnswer = "Chicken Lettuce Wrap";
    } else if (this.userResponse[0] == this.q1Options[1] && this.userResponse[1] == this.q3Options[2] && this.userResponse[2] == this.q5Options[0]) {
      this.userFoodAnswer = "Taco Salad";
    } else if (this.userResponse[0] == this.q1Options[2] && this.userResponse[1] == this.q3Options[0] && this.userResponse[2] == this.q5Options[1]) {
      this.userFoodAnswer = "Jalapeno Popper";
    } else if (this.userResponse[0] == this.q1Options[2] && this.userResponse[1] == this.q3Options[0] && this.userResponse[2] == this.q5Options[0]) {
      this.userFoodAnswer = "Vegetable Soup";
    } else if (this.userResponse[0] == this.q1Options[2] && this.userResponse[1] == this.q3Options[1] && this.userResponse[2] == this.q5Options[1]) {
      this.userFoodAnswer = "Deviled Eggs";
    } else if (this.userResponse[0] == this.q1Options[2] && this.userResponse[1] == this.q3Options[1] && this.userResponse[2] == this.q5Options[0]) {
      this.userFoodAnswer = "Hummus and Pita Chips";
    } else if (this.userResponse[0] == this.q1Options[2] && this.userResponse[1] == this.q3Options[2] && this.userResponse[2] == this.q5Options[1]) {
      this.userFoodAnswer = "Hot Wings and Ranch";
    } else if (this.userResponse[0] == this.q1Options[2] && this.userResponse[1] == this.q3Options[2] && this.userResponse[2] == this.q5Options[0]) {
      this.userFoodAnswer = "Loaded Nachos";
    }
    this.addDescription(this.userFoodAnswer);
  }

  addDescription(userFoodAnswer) {
    switch (userFoodAnswer) {
      case("Cookies"):
        this.answerDescription = "Cookies are a treat meant for all ages. You are a kid at heart, and fulfill your responsibilities with a playful attitude.";
        break;
      case ("Pie"):
        this.answerDescription = "You have a big heart and are always willing to help others. You love family gatherings, even though your family can irritate you at times, because you know that sharing food can bring you all closer.";
        break;
      case ("Ice Cream Cone"):
        this.answerDescription = "You can be a little immature and childlike at times, but it's all good because your friends know they can count on you in a sticky situation. You help others stay calm and figure things out easily.";
        break;
      case ("Trifle"):
        this.answerDescription = "Trifle is a dessert with lots of layers and fruits, and just like the dessert, your personality has a lot of different aspects. You usually remain laid back , but can also throw in a sarcastic comment or joke when hanging out with your friends. You know that differences are what make people special, which is why you have so many friends!";
        break;
      case ("Lava Cake A La Mode"):
        this.answerDescription = "You have a warm personality and love taking risks. You see the fun in everything.";
        break;
      case ("Ice Cream Cake"):
        this.answerDescription = "You enjoy having time to yourself, and love trying new things. However, sometimes you have trouble making up your mind.";
        break;
      case ("Burger"):
        this.answerDescription = "You're the life of the party, but can get annoyed at other people sometimes. But it's fine, because no one ever seems to get annoyed at you, and you always have a funny story to tell.";
        break;
      case ("Lasagna"):
        this.answerDescription = "You love planning get togethers with your friends, and love being the host. You might get irritated with them sometimes, but you're kind enough to now show it, which makes you a great friend";
        break;
      case ("Chicken Salad Sandwich"):
        this.answerDescription = "You love hanging out with your friends, and never say no to a party. You also happen to be a great multitasker.";
        break;
      case ("Pasta Salad"):
        this.answerDescription = "You are a caring person who never cracks under pressure. You bring out the best in people and genuinely enjoy spending time with others.";
        break;
      case ("Chicken Lettuce Wrap"):
        this.answerDescription = "Your friends and family keep you on your toes, but you always have a great time whenever you meet up with them. But sometimes you need a break and would rather spend time alone.";
        break;
      case ("Taco Salad"):
        this.answerDescription = "You're always the host of the party, but you don't mind. You love taking on challenges, and always have a fun surprise ready for your friends!";
        break;
      case ("Jalapeno Popper"):
        this.answerDescription = "You have a short fuse at times, and would rather spend a day alone and catching up on your to do list than throw a party. But you still have a good group of friends you hang out with whenever you're bored.";
        break;
      case ("Vegetable Soup"):
        this.answerDescription = "You like taking days off to spend time by yourself and with your loved ones. You can get a little irritable at times, but in the end, you would do anything for your friends and family.";
        break;
      case ("Deviled Eggs"):
        this.answerDescription = "You are almost always calm and collected, and always make time to work on your hobbies. You are also a determined go-getter.";
        break;
      case ("Hummus and Pita Chips"):
        this.answerDescription = "Because you are a calm and relaxed person, your friends and family come to you for advice. You love spending time with them, too.";
        break;
      case ("Hot Wings and Ranch"):
        this.answerDescription = "You have a very unique personality, as you have a warm and a cold side. You like to hang out with your friends, but they can get a little annoying sometimes when you think about it";
        break;
      case ("Loaded Nachos"):
        this.answerDescription = "You make the most of every day, and love to spend time with others. You also like to try new things and travel to new places.";
        break;
    }
  }
}
