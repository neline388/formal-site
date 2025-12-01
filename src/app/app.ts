import { Component } from '@angular/core';
import { MainComponent } from "./main.component";
import { HeaderComponent } from "./header.component/header.component";
import { FooterComponent } from "./footer.component/footer.component";
import { HomeComponent } from "./home/home";
import { MoreComponent } from "./more/more";
import { MatIconModule } from '@angular/material/icon';
import { TestimonialComponent } from './testimonial/testimonial.component';
import { CaseStudyComponent } from './case-study/case-study';


@Component({
  selector: 'app-root',
  templateUrl: './app.html',
  styleUrls: ['./app.css'],
  imports: [MainComponent, HeaderComponent, FooterComponent, HomeComponent, MoreComponent,MatIconModule,TestimonialComponent,CaseStudyComponent]
})
export class App {
  title = 'my-app';
  scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
}