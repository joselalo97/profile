import { Component } from '@angular/core';
import { CarouselModule } from 'primeng/carousel';
import { ButtonModule } from 'primeng/button';
import { TagModule } from 'primeng/tag';

interface Frame {
  img: string;
  alt: string;
}

@Component({
  selector: 'app-experience',
  standalone: true,
  imports: [CarouselModule, ButtonModule, TagModule],
  templateUrl: './experience.component.html',
  styleUrl: './experience.component.scss',
})
export class ExperienceComponent {
  list: Frame[] = [
    {
      img: './assets/img/lang/angular.png',
      alt: 'Angular',
    },
    {
      img: './assets/img/lang/bootstrap.svg',
      alt: 'Bootstrap',
    },
    {
      img: './assets/img/lang/html.png',
      alt: 'html',
    },
    {
      img: './assets/img/lang/css.png',
      alt: 'css',
    },
    {
      img: './assets/img/lang/ngprime.webp',
      alt: 'ngprmie',
    },
    {
      img: './assets/img/lang/ts.webp',
      alt: 'ts',
    },
  ];

  list2: Frame[] = [
    {
      img: './assets/img/lang/angular.png',
      alt: 'Angular',
    },
    {
      img: './assets/img/lang/bootstrap.svg',
      alt: 'Bootstrap',
    },
    {
      img: './assets/img/lang/html.png',
      alt: 'html',
    },
    {
      img: './assets/img/lang/css.png',
      alt: 'css',
    },
    {
      img: './assets/img/lang/ma.png',
      alt: 'material angular',
    },
    {
      img: './assets/img/lang/ts.webp',
      alt: 'ts',
    },
    {
      img: './assets/img/lang/sass.png',
      alt: 'sass',
    },
    {
      img: './assets/img/lang/js.png',
      alt: 'js',
    },
  ];

  list3: Frame[] = [
    {
      img: './assets/img/lang/angular.png',
      alt: 'Angular',
    },
    {
      img: './assets/img/lang/bootstrap.svg',
      alt: 'Bootstrap',
    },
    {
      img: './assets/img/lang/html.png',
      alt: 'html',
    },
    {
      img: './assets/img/lang/css.png',
      alt: 'css',
    },
    {
      img: './assets/img/lang/ngprime.webp',
      alt: 'ngprmie',
    },
    {
      img: './assets/img/lang/nestjs.png',
      alt: 'nestjs',
    },
    
    {
      img: './assets/img/lang/ts.webp',
      alt: 'ts',
    },
    {
      img: './assets/img/lang/sass.png',
      alt: 'sass',
    },
    {
      img: './assets/img/lang/js.png',
      alt: 'js',
    },
    {
      img: './assets/img/lang/postgres.png',
      alt: 'post',
    },
  ];

  responsiveOptions = [
    {
      breakpoint: '1500px',
      numVisible: 2,
      numScroll: 1,
    },
    {
      breakpoint: '1140px',
      numVisible: 2,
      numScroll: 1,
    },
    {
      breakpoint: '991px',
      numVisible: 1,
      numScroll: 1,
    },
    {
      breakpoint: '767px',
      numVisible: 2,
      numScroll: 1,
    },
  ];
}
