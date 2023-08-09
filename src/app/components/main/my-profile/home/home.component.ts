import { Component, HostListener, OnInit } from '@angular/core';
import { Lightbox } from 'ngx-lightbox';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  images: string[] = ['assets/imgs/my_picture.jpg'];
  lightboxImages: any[] = [];
  isMobile: boolean = false;
  isTablet: boolean = false;

  constructor(private lightbox: Lightbox) {
  }

  ngOnInit(): void {
    this.images.forEach((image: string) => {
      const lbImage = {
        src: image,
        thumb: image
      };
      this.lightboxImages.push(lbImage);
    });

    this.checkScreenWidth();
  }

  @HostListener('window:resize', ['$event'])
    onWindowResize(event: Event) {
      this.checkScreenWidth();
  }

  checkScreenWidth() {
    this.isMobile = window.innerWidth < 768;
    this.isTablet = window.innerWidth < 1024;
  }

  openLightbox(index: number): void {
    this.lightbox.open(this.lightboxImages, index);
  }
}
