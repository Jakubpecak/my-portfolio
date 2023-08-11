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
  timeout: any;
  isMobile: boolean = false;

  constructor(private elementRef: ElementRef) { }

  ngOnInit(): void {
    this.isMobile = window.innerWidth < 768;
  }

  @HostListener('window:scroll')
  onWindowScroll() {
      const skillElement = this.elementRef.nativeElement.querySelector('.accordion-item-body');
      const scrollThreshold = this.isMobile ? 1000 : 700;

      if (!this.animateCalled && skillElement && window.scrollY > scrollThreshold) {
        this.animateCalled = true;
        this.animateProgressBars();
      }
  }

  animateProgressBar(targetElement: HTMLElement, targetValue: number) {
    let progress = 0;

    const intervalId = setInterval(() => {
      progress++;
      targetElement.style.width = `${progress}%`;

      if (progress === targetValue) {
        clearInterval(intervalId);
      }
    }, 20);
  }

  animateProgressBars() {
    const progressBarElements = document.getElementsByClassName('progress-bar');

    for (let i = 0; i < progressBarElements.length; i++) {
      const targetElement = progressBarElements[i] as HTMLElement;
      const targetValue = 100;
      this.animateProgressBar(targetElement, targetValue);
    }
  }
}
