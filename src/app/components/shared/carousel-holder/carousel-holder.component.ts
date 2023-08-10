import { Component, OnInit } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { trigger, state, style, animate, transition } from '@angular/animations';

@Component({
  selector: 'app-carousel-holder',
  templateUrl: './carousel-holder.component.html',
  styleUrls: ['./carousel-holder.component.scss'],
  animations: [
    trigger('fadeInOut', [
      state('void', style({ opacity: 0 })),
      state('*', style({ opacity: 1 })),
      transition('void => *', animate('300ms ease-in-out'))
    ]),
  ],
})
export class CarouselHolderComponent implements OnInit {
  showLockIcon = false;

  websiteList = [
    {id: '1', url: '/assets/imgs/project_1.jpg'}, 
    {id: '2', url: '/assets/imgs/project_2.jpg'},
    {id: '3', url: '/assets/imgs/project_4.jpg'}, 
    {id: '4', url: '/assets/imgs/project_5.jpg'}, 
    {id: '5', url: '/assets/imgs/project_6.jpg'}
  ];

  customOptions: OwlOptions = {
    loop: true,
    autoplay: true,
    mouseDrag: true,
    touchDrag: false,
    pullDrag: false,
    dots: true,
    navText: ["<i class='fa fa-angle-left'></i>", "<i class='fa fa-angle-right'></i>"],
    dotsData: true,
    responsive: {
      0: {
        items: 1,
      },
      600: {
        items: 1,
      },
      1000: {
        items: 1,
      }
    },
    nav: true
  }

  ngOnInit(): void {
    this.websiteList = this.shuffleArray(this.websiteList);
  }

  shuffleArray(array: any) {
    let currentIndex = array.length, temporaryValue, randomIndex;

    while (0 !== currentIndex) {
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;
      temporaryValue = array[currentIndex];
      array[currentIndex] = array[randomIndex];
      array[randomIndex] = temporaryValue;
    }
    return array;
  }
}