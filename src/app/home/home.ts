import { Component, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.html',
  styleUrls: ['./home.css'],
  standalone: true
})
export class HomeComponent implements AfterViewInit {
  
  scrollToFeatures() {
    document.getElementById('features')?.scrollIntoView({ 
      behavior: 'smooth' 
    });
  }

  ngAfterViewInit() {
    // Trigger fade-in animation when component comes into view
    this.observeAnimation();
  }

  private observeAnimation() {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
        }
      });
    });

    const element = document.querySelector('.hero');
    if (element) {
      observer.observe(element);
    }
  }
}