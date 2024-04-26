import { Component } from '@angular/core';
import { AboutComponent } from './about/about.component';
import { PresentComponent } from './present/present.component';
import { ProgrammingLanguageComponent } from './programming-language/programming-language.component';
import { ServicesComponent } from './services/services.component';
import { MenuComponent } from './menu/menu.component';

@Component({
  selector: 'app-profile-info',
  standalone: true,
  imports: [
    AboutComponent,
    PresentComponent,
    ProgrammingLanguageComponent,
    ServicesComponent,
    MenuComponent,
  ],
  templateUrl: './profile-info.component.html',
  styleUrl: './profile-info.component.scss',
})
export class ProfileInfoComponent {}
