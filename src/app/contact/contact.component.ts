import { Component } from '@angular/core';
import {faGithub, faLinkedin} from '@fortawesome/free-brands-svg-icons';
import {faMapMarked, faEnvelope, faUserGraduate, faPhone, faLanguage, faDownload} from '@fortawesome/free-solid-svg-icons' 
@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent {
  faGithub = faGithub;
  faLinkedin = faLinkedin;
  faMarker = faMapMarked;
  faEnvelope = faEnvelope;
  faUserGraduate = faUserGraduate;
  faPhone = faPhone;
  faLanguage = faLanguage;
  faDownload = faDownload;
}
