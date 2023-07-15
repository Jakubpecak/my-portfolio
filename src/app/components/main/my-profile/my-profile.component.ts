import { Component, HostListener, OnInit } from '@angular/core';

@Component({
  selector: 'app-my-profile',
  templateUrl: './my-profile.component.html',
  styleUrls: ['./my-profile.component.scss']
})
export class MyProfileComponent implements OnInit {
  isLoading: boolean = true;
  showScrollButton: boolean = false;

  constructor() { }

  ngOnInit(): void {
    setTimeout(() => {
      this.isLoading = false;
    }, 3000);
  }

  @HostListener('window:scroll', ['$event'])
  onWindowScroll(event: Event) {
    this.showScrollButton = window.scrollY > 0;
  }

  scrollToTop() {
    window.scrollTo(0, 0);
  }

}
