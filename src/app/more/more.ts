import { Component, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-more',
  templateUrl: './more.html',
  styleUrls: ['./more.css'],
  standalone: true
})
export class MoreComponent implements AfterViewInit {
  
  testimonials = [
    {
      quote: 'This platform has completely transformed how our team collaborates. The intuitive interface and powerful features saved us countless hours.',
      name: 'Sarah Johnson',
      role: 'Product Manager at TechCorp'
    },
    {
      quote: 'Implementation was seamless and the results were immediate. Our productivity increased by 40% in the first month alone.',
      name: 'Michael Chen',
      role: 'CTO at StartupXYZ'
    },
    {
      quote: 'The support team is exceptional and the platform reliability is unmatched. Highly recommended for any growing business.',
      name: 'Emily Davis',
      role: 'Operations Director at GrowthCo'
    }
  ];

  ngAfterViewInit() {
    this.observeAnimation();
  }

  private observeAnimation() {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
        }
      });
    }, { threshold: 0.1 });

    const element = document.querySelector('.testimonials');
    if (element) {
      observer.observe(element);
    }
  }
}