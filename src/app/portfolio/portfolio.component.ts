import { Component } from '@angular/core';
import {faGithub, faBehance, faYoutube} from '@fortawesome/free-brands-svg-icons';
@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.scss']
})
export class PortfolioComponent {
  faGithub = faGithub;
  faBehance = faBehance;
  faYoutube = faYoutube;
  projects = [
    {name:'Gorana Food House',summary:'A Food commerce web app which is fully responsive, in this you can add, remove an item to cart, it has payment integration and also it has user authentication.',
link:'https://github.com/Aashish-Lohar/FoodOrderingApp'},
{name:'Gorana Food House',summary:'A Food commerce web app which is fully responsive, in this you can add, remove an item to cart, it has payment integration and also it has user authentication.',
link:'https://github.com/Aashish-Lohar/FoodOrderingApp'},
{name:'Gorana Food House',summary:'A Food commerce web app which is fully responsive, in this you can add, remove an item to cart, it has payment integration and also it has user authentication.',
link:'https://github.com/Aashish-Lohar/FoodOrderingApp'},
{name:'Gorana Food House',summary:'A Food commerce web app which is fully responsive, in this you can add, remove an item to cart, it has payment integration and also it has user authentication.',
link:'https://github.com/Aashish-Lohar/FoodOrderingApp'}
  ]
}
