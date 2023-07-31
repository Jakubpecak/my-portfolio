import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss']
})
export class SkillsComponent implements OnInit {
  leftWrapTitle: string[] = ['skills.title-2', 'skills.experience'];
  leftWrapText: string[] = ['HTML5', 'Css/Sass', 'Javascript/Typescript', 'Angular', 'Git'];
  leftProgressList: number[] = [80, 80, 60, 60, 40];

  rightWrapTitle: string[] = ['skills.title-3', 'skills.experience'];
  rightWrapText: string[] = ['Bootcamp Junior Java Developer', 'Wordpress', 'Responsive Web Design', 'Figma', 'Adobe XD'];
  rightProgressList: number[] = [40, 80, 80, 40, 40];

  constructor() {}

  ngOnInit(): void {}

}
