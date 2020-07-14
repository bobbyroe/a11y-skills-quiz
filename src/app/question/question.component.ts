import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-question",
  templateUrl: "./question.component.html",
  styleUrls: ["./question.component.scss"],
})
export class QuestionComponent implements OnInit {
  question: string = "WCAG stands for ...";
  answers: string[] = [
    "Watery Cabbage and Garlic",
    "Winter Cap and Gown",
    "Web Content Accessibility Guidelines",
    "Wuhkag",
  ];
  numQuestionsRemaining: number = 3;
  constructor() {}

  ngOnInit() {}
}
