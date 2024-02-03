import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss']
})
export class SkillsComponent implements OnInit {
  leftWrapTitle: string[] = ['skills.title-2', 'skills.experience'];
  leftWrapText: string[] = ['HTML5', 'Css/Sass', 'Javascript/Typescript', 'Angular 14+', 'Git', 'Responsive Web Design'];
  leftProgressList: number[] = [80, 80, 70, 70, 60, 80];

  rightWrapTitle: string[] = ['skills.title-3', 'skills.experience'];
  rightWrapText: string[] = ['Bootcamp Junior Java Developer', 'Wordpress', 'Figma/Adobe XD', 'Github/Gitlab', 'Jira (Scrum)', 'TDD (Test-driven development)'];
  rightProgressList: number[] = [20, 70, 35, 35, 50, 15];

  constructor() {}

  ngOnInit(): void {}

}
