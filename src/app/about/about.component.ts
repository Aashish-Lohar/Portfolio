import { Component } from '@angular/core';
import {faUserGraduate, faLaptopCode,faDownload} from '@fortawesome/free-solid-svg-icons';
@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent {
  faUserGraduate = faUserGraduate;
  faLaptopCode = faLaptopCode;
  faDownload = faDownload;
  work = true;
  
  skills = [
    {skill:'HTML5',progress:'80%'},
    {skill:'CSS3/SCSS',progress:'80%'},
    {skill:'JavaScript',progress:'75%'},
    {skill:'TypeScript',progress:'70%'},
    {skill:'Angular',progress:'75%'},
    {skill:'Node.js',progress:'60%'},
    {skill:'MongoDB',progress:'60%'},
    {skill:'BootStrap',progress:'80%'},
    {skill:'Angular Material',progress:'85%'},
    {skill:'Python',progress:'70%'},

  ]

  experience = [
    {
      company:'Persistent Systems', joining_date:"Feb 2022",leaving_date:"present", position:"Software Engineer",
      workResponsibility:`Working as Angular developer for our client.
      Developing and maintaining Angular applications for web and mobile interfaces.
      Working to integrate backend APIs with front-end.
      Developed cart pages and its functionalities.
      Developing requested and responsive UI by collaborating with designing team.
      Maintaining and sharing the data across SPA using RxJS and Services`.split('\n')
    },
    {
      company:'Lucent Innovations', joining_date:"August 2021",leaving_date:"December 2021", position:"Trainee Software Developer",
      workResponsibility:`Learnt front-end development in Shopify
      Created product pages for an ecommerce.
      Created Shopify themes and handled cart using Shopify cart api`.split('\n')
    },
  ]

  education = [
    {graduation:"Bachelor of Technology",institute:"Geetanjali Institute of Technical Studies",specialization:"Computer Science & Engineering",passing_year:2021, joining_year:2017},
    {graduation:"Senior Secondary School",institute:"Guru Nanak Public School",specialization:"PCM",passing_year:2016, joining_year:2015},
    {graduation:"Secondary School",institute:"Guru Nanak Public School",specialization:"PCM",passing_year:2014, joining_year:2013},
  ]

}
