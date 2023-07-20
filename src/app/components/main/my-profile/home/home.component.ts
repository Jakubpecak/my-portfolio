import { Component } from '@angular/core';
import { Lightbox } from 'ngx-lightbox';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  images: string[] = [
    'assets/imgs/my_picture.jpg'
  ];

  lightboxImages: any[] = [];

  constructor(private lightbox: Lightbox) {
    this.images.forEach((image: string) => {
      const lbImage = {
        src: image,
        thumb: image
      };

      this.lightboxImages.push(lbImage);
    });
  }

  openLightbox(index: number): void {
    this.lightbox.open(this.lightboxImages, index);
  }
}
