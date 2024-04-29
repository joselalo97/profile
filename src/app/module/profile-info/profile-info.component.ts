import {
  Component,
  ElementRef,
  OnInit,
  ViewChild,
  ViewChildren,
} from '@angular/core';
import { AboutComponent } from './about/about.component';
import { PresentComponent } from './present/present.component';
import { ProgrammingLanguageComponent } from './programming-language/programming-language.component';
import { ServicesComponent } from './services/services.component';
import { MenuComponent } from './menu/menu.component';
import { ExperienceComponent } from './experience/experience.component';

@Component({
  selector: 'app-profile-info',
  standalone: true,
  imports: [
    AboutComponent,
    PresentComponent,
    ProgrammingLanguageComponent,
    ServicesComponent,
    MenuComponent,
    ExperienceComponent,
  ],
  templateUrl: './profile-info.component.html',
  styleUrl: './profile-info.component.scss',
})
export class ProfileInfoComponent implements OnInit {
  @ViewChild('scroll', { static: true }) scroll!: ElementRef<HTMLDivElement>;
  @ViewChildren('about') about!: ElementRef<AboutComponent>;

  ngOnInit(): void {
    this.scroll.nativeElement.addEventListener('scroll', (ev: any) => {
      let texts = document.querySelectorAll('[data-hidden]');

      for (let i = 0; i < texts.length; i++) {
        const distancia = texts[i].getBoundingClientRect().top;
        const altura = this.scroll.nativeElement.clientHeight;

        if (distancia <= altura) {
          texts[i].classList.add('view');
        } else {
          texts[i].classList.remove('view');
        }
      }

      let sections = document.querySelectorAll('[data-hidden-up]');

      for (let i = 0; i < sections.length; i++) {
        const distancia = sections[i].getBoundingClientRect().top;
        const altura = this.scroll.nativeElement.clientHeight / 1.3;

        if (distancia <= altura) {
          sections[i].classList.add('view-up');
        } else {
          sections[i].classList.remove('view-up');
        }
      }
    });
  }
}
