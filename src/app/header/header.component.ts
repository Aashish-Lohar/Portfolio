import { Component } from '@angular/core';
import { faHome, faUser, faBriefcase, faNewspaper,faEnvelopeOpen } from '@fortawesome/free-solid-svg-icons';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  faHome = faHome ;
  faUser = faUser;
  faBriefcase = faBriefcase;
  faNewspaper = faNewspaper;
  faEnvelopeOpen = faEnvelopeOpen;

  constructor(){

  }
}
