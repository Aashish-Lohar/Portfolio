import { Component, Renderer2 } from '@angular/core';
import {faAdjust} from '@fortawesome/free-solid-svg-icons';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  faAdjust = faAdjust;
  isDarkMode = false;
  title:string = 'portfolio'
  constructor(private renderer:Renderer2){}

  // ngOnInit(){
  //   document.querySelector(".theme-btn")?.addEventListener("click", () => {
  //     document.body.classList.toggle("light-mode");
  // })
  // }

  toggleDarkMode() {
    this.isDarkMode = !this.isDarkMode;
    if (this.isDarkMode) {
      this.renderer.addClass(document.body, 'light-mode');
    } else {
      this.renderer.removeClass(document.body, 'light-mode');
    }
  }
}
