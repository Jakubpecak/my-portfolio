import { Component, ElementRef, HostListener, Input, OnInit } from '@angular/core';

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
  animateCalled: boolean = false;

  constructor(private elementRef: ElementRef) { }

  ngOnInit(): void {
  }

  @HostListener('window:scroll')
  onWindowScroll() {
    if (!this.animateCalled) {
      const skillElement = this.elementRef.nativeElement.querySelector('#skill');
      const windowBottom = window.innerHeight + window.scrollY;
  
      if (skillElement && windowBottom >= skillElement.offsetTop) {
        this.animateProgressBars();
        this.animateCalled = true;
      }
    }
  }

  animateProgressBar(targetElement: HTMLElement, targetValue: number) {
    let progress = 0;

    const intervalId = setInterval(() => {
      progress++;
      targetElement.style.width = `${progress}%`;

      if (progress >= targetValue) {
        clearInterval(intervalId);
      }
    }, 20);
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
