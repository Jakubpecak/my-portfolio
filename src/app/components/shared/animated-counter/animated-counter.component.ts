import { Component, Input, OnInit, OnDestroy } from '@angular/core';
import { trigger, state, style, animate, transition } from '@angular/animations';

@Component({
  selector: 'app-animated-counter',
  templateUrl: './animated-counter.component.html',
  styleUrls: ['./animated-counter.component.scss'],
  animations: [
    trigger('counterAnimation', [
      state('inactive', style({ opacity: 0.1, color: '#3f51b5' })),
      state('active', style({ opacity: 1, color: '#000' })),
      transition('inactive => active', animate('2000ms ease-in')),
      transition('active => inactive', animate('2000ms ease-out'))
    ])
  ]
  })
export class AnimatedCounterComponent implements OnInit, OnDestroy {
  @Input() startValue = 0;
  @Input() endValue = 100;
  @Input() duration = 2000;
  @Input() isStyled = false;
  counterValue = 0;
  animationInterval: any;
  animationStep: number = 0;
  startTime: number = 0;
  animationState = 'inactive';

  ngOnInit() {
    this.animationStep = Math.ceil((this.endValue - this.startValue) / (this.duration / 100));
    this.startTime = new Date().getTime();
    this.animateCounter();
  }

  ngOnDestroy() {
    clearInterval(this.animationInterval);
  }

  animateCounter() {
    this.animationInterval = setInterval(() => {
      const currentTime = new Date().getTime();
      const elapsedTime = currentTime - this.startTime;
      this.animationState = 'active';

      if (elapsedTime < this.duration) {
        const progress = elapsedTime / this.duration;
        this.counterValue = Math.floor(this.startValue + (progress * (this.endValue - this.startValue)));
      } else {
        this.counterValue = this.endValue;
        clearInterval(this.animationInterval);
      }
    }, 100);
  }
}