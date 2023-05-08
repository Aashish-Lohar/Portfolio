import { Component } from '@angular/core';
import {
  faGithub,
  faBehance,
  faYoutube,
} from '@fortawesome/free-brands-svg-icons';
@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.scss'],
})
export class PortfolioComponent {
  faGithub = faGithub;
  faBehance = faBehance;
  faYoutube = faYoutube;
  projects = [
    {
      name: 'Gorana Food House',
      summary:
        'A Food commerce web app which is fully responsive, in this you can add, remove an item to cart, it has payment integration and also it has user authentication.',
      link: 'https://github.com/Aashish-Lohar/FoodOrderingApp',
      imgUrl: '../../assets/img/Gorana-Food-House.gif',
    },
    {
      name: 'Airbnb Clone',
      summary:
        'Responsive UI clone of airbnb stay booking website developed in Angular and Tailwind CSS for mobile and web. Right now only UI is developed, in future fully functional web app will be developed. ',
      link: 'https://github.com/Aashish-Lohar/airbnb-clone-in-angular',
      imgUrl: '../../assets/img/airbnb_clone.gif',
    },
    {
      name: 'Medium Clone in Angular & NgRx',
      summary:
        'Clone of blogging WebApp Medium, A knowledge sharing web app where everyone can share the knowledge of there respective domain. Build in Angular, Ngrx, RxJS and RealWorld Conduit API',
      link: 'https://github.com/Aashish-Lohar/medium_clone',
      imgUrl: '../../assets/img/MediumClone.gif',
    },
  ];
}
