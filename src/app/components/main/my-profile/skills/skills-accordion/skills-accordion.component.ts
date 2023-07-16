import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-skills-accordion',
  templateUrl: './skills-accordion.component.html',
  styleUrls: ['./skills-accordion.component.scss']
})
export class SkillsAccordionComponent implements OnInit {
  @Input() title: any;
  @Input() textList: string[] = [];
  @Input() progressList: number[] = [];
  expandedIndex = 0;

  constructor() { }

  ngOnInit(): void {
    setTimeout(() => {
      this.animateProgressBars();
    }, 0);
  }

  animateProgressBar(targetElement: HTMLElement, targetValue: number) {
    let progress = 0;

    const intervalId = setInterval(() => {
      progress++;
      targetElement.style.width = `${progress}%`;

      if (progress >= targetValue) {
        clearInterval(intervalId);
      }
    }, 20); // Adjust the interval duration for smoother animation
  }

  animateProgressBars() {
    const progressBarElements = document.getElementsByClassName('progress-bar');

    for (let i = 0; i < progressBarElements.length; i++) {
      const targetElement = progressBarElements[i] as HTMLElement;
      const targetValue = this.progressList[0];
      this.animateProgressBar(targetElement, targetValue);
    }
  }


}
